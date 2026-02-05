import { useState, useEffect } from "react";
import { cartApi, CartItem } from "@/api/cart";
import { ordersApi } from "@/api/orders";
import { motion } from "framer-motion";
import prep from "@/assets/prep.jpg";

const Checkout = () => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [successOrder, setSuccessOrder] = useState<any>(null);

    // Form State
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: ""
    });

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cart = await cartApi.get();
                if (cart && cart.items) setItems(cart.items);
            } catch (e) {
                console.error("Failed to load cart", e);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const payload = {
                guestEmail: formData.email,
                shippingAddress: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    address1: formData.address,
                    city: formData.city,
                    state: "Lagos", // Default/Hardcoded for MVP
                    postalCode: formData.postalCode,
                    country: "Nigeria"
                },
                paymentMethod: "manual" as "manual" // Explicit cast
            };

            const order = await ordersApi.create(payload);
            setSuccessOrder(order);
            // Clear cart UI locally (backend clears it too)
            setItems([]);
        } catch (err) {
            console.error("Order failed", err);
            alert("Failed to place order. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const total = items.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0);

    if (successOrder) {
        return (
            <div className="min-h-screen bg-background pt-32 pb-24 px-6 flex items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl space-y-6"
                >
                    <h2 className="font-editorial text-4xl text-primary">Order Confirmed</h2>
                    <p className="font-luxury text-lg text-foreground/60">
                        Thank you for your purchase. Your order number is <span className="text-primary font-medium">{successOrder.orderNumber}</span>.
                    </p>
                    <div className="bg-secondary/10 p-6 rounded-sm">
                        <p className="font-luxury text-sm text-primary mb-2">NEXT STEPS</p>
                        <p className="font-luxury text-sm text-foreground/60">
                            You will receive an email shortly with payment instructions.
                            Upon confirmation, your <strong>Ritual Access Code</strong> will be issued.
                        </p>
                    </div>
                    <a href="/" className="inline-block border-b border-primary pb-1 font-luxury uppercase tracking-widest text-xs hover:text-accent hover:border-accent transition-colors">
                        Return to Homepage
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

                {/* Order Summary */}
                <div className="order-2 md:order-1">
                    <h2 className="font-editorial text-3xl text-primary mb-8">Order Summary</h2>
                    <div className="space-y-6 mb-8">
                        {items.length === 0 && !loading && (
                            <p className="text-foreground/50 font-luxury">Your cart is empty.</p>
                        )}
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-16 h-20 bg-secondary/10 rounded overflow-hidden">
                                    <img src={item.product?.images?.[0] || prep} alt={item.product?.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-editorial text-lg text-primary">{item.product?.title}</h3>
                                    <p className="font-luxury text-sm text-foreground/60">Qty: {item.quantity} — ${item.product?.price * item.quantity}.00</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-border pt-6 space-y-2">
                        <div className="flex justify-between font-luxury text-sm">
                            <span>Subtotal</span>
                            <span>${total}.00</span>
                        </div>
                        <div className="flex justify-between font-luxury text-sm">
                            <span>Shipping</span>
                            <span>Calculated at next step</span>
                        </div>
                        <div className="flex justify-between font-editorial text-xl text-primary pt-4">
                            <span>Total</span>
                            <span>${total}.00</span>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="order-1 md:order-2">
                    <h2 className="font-editorial text-3xl text-primary mb-8">Checkout</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Email</label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                        </div>

                        <h3 className="font-luxury text-sm uppercase tracking-widest text-primary pt-4">Shipping Address</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                            </div>
                            <div>
                                <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                            </div>
                        </div>
                        <div>
                            <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Address" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="City" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                            </div>
                            <div>
                                <input name="postalCode" value={formData.postalCode} onChange={handleChange} type="text" placeholder="Postal Code" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                            </div>
                        </div>

                        <div>
                            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary" required />
                        </div>

                        <div className="pt-8">
                            <button
                                type="submit"
                                disabled={submitting || items.length === 0}
                                className="w-full py-4 bg-primary text-white font-luxury text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-50"
                            >
                                {submitting ? "Processing..." : "Pay Now"}
                            </button>
                            <p className="text-center text-[10px] text-foreground/30 mt-2 uppercase tracking-widest font-luxury">
                                Secure SSL Encryption
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
