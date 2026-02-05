import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { cartApi, CartItem } from "@/api/cart";
import prep from "@/assets/prep.jpg";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch cart when drawer opens
    useEffect(() => {
        if (isOpen) {
            fetchCart();
        }
    }, [isOpen]);

    // Listen for global cart update events (from Product cards)
    useEffect(() => {
        const handleCartUpdate = () => fetchCart();
        window.addEventListener("cart-updated", handleCartUpdate);
        return () => window.removeEventListener("cart-updated", handleCartUpdate);
    }, []);

    const fetchCart = async () => {
        try {
            // For now, allow failing if backend is not ready and use empty
            setLoading(true);
            const cart = await cartApi.get();
            if (cart && cart.items) {
                setItems(cart.items);
            }
        } catch (err) {
            console.error("Failed to fetch cart", err);
        } finally {
            setLoading(false);
        }
    };

    const removeItem = async (itemId: string) => {
        try {
            await cartApi.remove(itemId);
            fetchCart();
        } catch (err) {
            console.error("Failed to remove item", err);
        }
    };

    const updateQuantity = async (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        try {
            await cartApi.update(itemId, newQuantity);
            fetchCart();
        } catch (err) {
            console.error("Failed to update quantity", err);
        }
    };

    const subtotal = items.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 border-l border-border shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <h2 className="font-editorial text-2xl text-primary">Your Ritual</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-secondary/20 rounded-full transition-colors"
                            >
                                <X size={20} className="text-primary" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {loading && items.length === 0 ? (
                                <div className="text-center py-10 text-foreground/50">Loading ritual...</div>
                            ) : items.length === 0 ? (
                                <div className="text-center py-20 text-foreground/50 font-luxury">
                                    <ShoppingBag className="mx-auto mb-4 opacity-50" size={32} />
                                    Your cart is empty.
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-24 bg-secondary/10 rounded-sm overflow-hidden flex-shrink-0">
                                            {/* Use product image or fallback */}
                                            <img src={item.product?.images?.[0] || prep} alt={item.product?.title || "Product"} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="font-editorial text-lg text-primary leading-tight">{item.product?.title || "Unknown Product"}</h3>
                                                <p className="font-luxury text-sm text-foreground/60 mt-1">${item.product?.price || 0}.00</p>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center border border-border rounded-full">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 px-2 hover:text-accent disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="font-luxury text-xs w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 px-2 hover:text-accent"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="font-luxury text-xs text-foreground/40 underline hover:text-accent"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-border bg-secondary/5">
                            <div className="flex justify-between items-center mb-6 font-editorial text-xl text-primary">
                                <span>Subtotal</span>
                                <span>${subtotal}.00</span>
                            </div>
                            <button
                                onClick={() => window.location.href = "/checkout"}
                                className="w-full py-4 bg-primary text-white font-luxury text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all duration-300"
                            >
                                Proceed to Checkout
                            </button>
                            <p className="text-center text-[10px] text-foreground/40 mt-4 uppercase tracking-widest font-luxury">
                                Shipping & Taxes calculated at checkout
                            </p>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
