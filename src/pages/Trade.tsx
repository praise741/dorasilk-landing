import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import Footer from "../components/navigation/Footer";
import { partnershipsApi } from "../api/partnerships";

const Trade = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        businessType: "",
        location: "",
        email: "",
        phone: "",
        website: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await partnershipsApi.create(formData);
            setSubmitted(true);
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                 <div className="flex-1 flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md text-center space-y-6"
                    >
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                            <Check className="text-accent" size={32} />
                        </div>
                        <h2 className="font-editorial text-3xl text-primary">Inquiry Received</h2>
                        <p className="font-luxury text-foreground/70 leading-relaxed">
                            Thank you for your interest in Dorasilk.
                            All partnership enquiries are carefully reviewed.
                            If your application aligns with our current partnership criteria, a member of our team will be in touch.
                        </p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-luxury text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                        >
                            Return Home
                        </button>
                    </motion.div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="flex-1 pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16 space-y-8"
                    >
                        <span className="text-accent font-luxury uppercase tracking-[0.25em] text-xs font-medium block">
                            Trade & Partnerships
                        </span>
                        <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-primary">
                            Work With Dorasilk
                        </h1>
                        <div className="max-w-2xl mx-auto space-y-6 text-foreground/70 font-luxury text-lg leading-relaxed">
                            <p>
                                Dorasilk partners with a select group of professionals and retailers who share our commitment to quality, precision, and elevated care.
                            </p>
                            <p>
                                Our brand is built on science-led formulation, ritual-based application, and uncompromising standards.
                            </p>
                            <p>
                                We welcome enquiries from aligned partners who wish to stock Dorasilk or explore professional collaboration.
                            </p>
                        </div>
                    </motion.div>

                    {/* Information Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="grid md:grid-cols-2 gap-12 mb-20 border-t border-b border-primary/10 py-12"
                    >
                        <div className="space-y-6">
                            <h3 className="font-editorial text-2xl text-primary">Who This Is For</h3>
                            <ul className="space-y-4 font-luxury text-foreground/70">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Premium salons and studios
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Professional wig specialists and technicians
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Curated beauty retailers and concept stores
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Distributors aligned with a luxury positioning
                                </li>
                            </ul>
                            <p className="text-sm italic text-foreground/50 pt-2">
                                All enquiries are reviewed to ensure alignment with Dorasilk’s brand standards, presentation, and customer experience.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-editorial text-2xl text-primary">What To Expect</h3>
                            <ul className="space-y-4 font-luxury text-foreground/70">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Selective onboarding process
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Brand-aligned retail and professional guidelines
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Ongoing support and structured collaboration
                                </li>
                            </ul>
                            <div className="bg-primary/5 p-6 mt-6 border-l-2 border-accent">
                                <p className="font-luxury text-sm text-foreground/80">
                                    Dorasilk does not operate as an open reseller brand. Partnership is by review and approval only.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="font-editorial text-3xl text-primary mb-4">Submit A Partnership Enquiry</h3>
                            <p className="font-luxury text-foreground/60">
                                If you believe your business aligns with the Dorasilk standard, we invite you to submit an enquiry below.
                            </p>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            {error && (
                                <div className="p-4 bg-red-50 text-red-600 text-sm font-luxury text-center border border-red-100">
                                    {error}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Full Name</label>
                                        <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Business Name</label>
                                        <input required name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Business Type</label>
                                        <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors">
                                            <option value="">Select Type...</option>
                                            <option value="salon">Salon / Studio</option>
                                            <option value="retailer">Retail Store / Concept Store</option>
                                            <option value="specialist">Professional Wig Specialist</option>
                                            <option value="distributor">Distributor</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Location (City, Country)</label>
                                        <input required name="location" value={formData.location} onChange={handleChange} type="text" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Email Address</label>
                                        <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Phone Number (Optional)</label>
                                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Website / Instagram (Optional)</label>
                                        <input name="website" value={formData.website} onChange={handleChange} type="text" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="block text-xs font-luxury uppercase tracking-widest text-foreground/50 mb-2">Brief Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4} 
                                    placeholder="Tell us about your business and why you’re interested in partnering with Dorasilk"
                                    className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-primary font-luxury transition-colors resize-none placeholder:text-foreground/20"
                                ></textarea>
                            </div>

                            <div className="pt-8 text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-12 py-4 bg-primary text-white font-luxury text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={16} />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Enquiry"
                                    )}
                                </button>
                            </div>

                        </motion.form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Trade;
