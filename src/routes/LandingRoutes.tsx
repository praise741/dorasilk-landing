import { lazy } from "react";
import Landing from "@/pages/landing/Landing";
import LandingSharedLayout from "@/SharedLayout/LandingSharedLayout";
import { Routes, Route } from "react-router";

// Lazy load pages
const PrivacyPolicy = lazy(() => import("@/pages/landing/PrivacyPolicy"));
const ReturnPolicy = lazy(() => import("@/pages/landing/ReturnPolicy"));
const TermsOfUse = lazy(() => import("@/pages/landing/TermsOfUse"));
const Trade = lazy(() => import("@/pages/Trade"));
const Checkout = lazy(() => import("@/pages/Checkout"));

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LandingSharedLayout />}>
        <Route path="" index element={<Landing />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<ReturnPolicy />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default LandingRoutes;
