import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Cookie,
  Download,
  Copy,
  Mail,
  Trash2,
  ChevronDown,
  CheckCircle,
} from "lucide-react";



const policyText = {
  shortSummary:
    "Laptopiya respects your privacy. We collect only the data required to provide services, process orders, and improve your experience. This page explains what we collect, why, and how we protect it.",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content:
        "Laptopiya (‘we’, ‘us’, ‘our’) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your personal information when you visit our website (laptopiya.com) or use our services.",
    },
    {
      id: "data-we-collect",
      title: "Data We Collect",
      content:
        "We collect: Account details (name, email, phone), Order information (items, pricing, address), Payment metadata (card tokenization details, not full card numbers), Device & usage data (IP, cookies, browser), and Support communications.",
    },
    {
      id: "how-we-use",
      title: "How We Use Your Data",
      content:
        "To fulfill orders, manage accounts, provide customer support, detect fraud, comply with legal obligations, and deliver personalised content & marketing (with consent).",
    },
    {
      id: "share-with",
      title: "Who We Share Data With",
      content:
        "Service providers (payment gateways, logistics), affiliates, legal authorities when required, and analytics providers under strict contracts.",
    },
    {
      id: "security",
      title: "Security",
      content:
        "We use industry-standard security measures including encryption in transit, access controls, and regular audits. However, no system is 100% secure; report concerns to privacy@laptopiya.com.",
    },
    {
      id: "rights",
      title: "Your Rights",
      content:
        "You can request access, correction, deletion, or portability of your personal data. You can also withdraw consent for marketing. See the Data Request section below to start a request.",
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      content:
        "We use cookies for essential site functionality, analytics, and optional marketing. You may change cookie preferences using the Cookie Controls on this page.",
    },
    {
      id: "contact",
      title: "Contact Us",
      content:
        "For privacy inquiries, email privacy@laptopiya.com or use the contact options below.",
    },
  ],
};

const DATA_TABLE = [
  {
    type: "Account & Order Data",
    examples: "Name, email, phone, shipping address, order history",
    purpose: "Processing orders, returns, communications",
    retention: "Stored until account deletion + 7 years for accounting",
  },
  {
    type: "Payment Metadata",
    examples: "Payment tokens, transaction IDs",
    purpose: "Payment processing & fraud prevention",
    retention: "As per payment provider; usually 3–5 years",
  },
  {
    type: "Device & Usage Data",
    examples: "IP, cookies, browser, activity logs",
    purpose: "Analytics, security, UX improvements",
    retention: "30–24 months depending on purpose",
  },
];

export default function LaptopiyaPrivacyPolicy() {
  // Cookie consent states (demo/local, extend with backend or cookie library)
  const [consent, setConsent] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  const [expandedSection, setExpandedSection] = useState("intro");
  const [showFullPolicy, setShowFullPolicy] = useState(false);

  // Data request form state (mock)
  const [requesting, setRequesting] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    orderId: "",
    requestType: "access", // access | delete | portability
    message: "",
  });

  useEffect(() => {
    // load preferences from localStorage (demo behavior)
    const saved = typeof window !== "undefined" && localStorage.getItem("laptopiya_consent");
    if (saved) {
      try {
        setConsent(JSON.parse(saved));
      } catch (e) {
        // ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("laptopiya_consent", JSON.stringify(consent));
    } catch (e) {}
  }, [consent]);

  function toggleCategory(cat) {
    // essential cannot be turned off in this demo
    if (cat === "essential") return;
    setConsent((s) => ({ ...s, [cat]: !s[cat] }));
  }

  function downloadPolicy() {
    const content = [
      "Laptopiya - Privacy Policy",
      "",
      policyText.shortSummary,
      "",
      ...policyText.sections.map((s) => `${s.title}\n\n${s.content}\n`),
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Laptopiya-Privacy-Policy.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function copyPolicy() {
    const content = [
      policyText.shortSummary,
      ...policyText.sections.map((s) => `${s.title}\n${s.content}\n`),
    ].join("\n\n");
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Policy copied to clipboard"))
      .catch(() => alert("Could not copy — please allow clipboard access"));
  }

  async function submitDataRequest(e) {
    e.preventDefault();
    setRequesting(true);
    setRequestStatus(null);

    // Demo mock delay — replace with real API
    await new Promise((r) => setTimeout(r, 1200));

    // Basic validation
    if (!requestData.name || !requestData.email) {
      setRequestStatus({ ok: false, message: "Name and email are required." });
      setRequesting(false);
      return;
    }

    // Mock success
    setRequestStatus({
      ok: true,
      message:
        requestData.requestType === "delete"
          ? "We've received your deletion request. Our team will verify and process within 7 days."
          : requestData.requestType === "access"
          ? "Access request received. We'll compile your data and email it within 5 days."
          : "Portability request received. We'll prepare a machine-readable export and contact you.",
    });
    setRequesting(false);

    // Optionally clear form
    // setRequestData({ name: "", email: "", orderId: "", requestType: "access", message: "" });
  }

  return (
    <div className="min-h-screen  pt-[8rem] bg-gradient-to-br from-[#071024] via-[#0b1220] to-[#071024] text-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Laptopiya Privacy Policy
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Clear. Transparent. Yours. Understand how Laptopiya collects and uses your data — and control it.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadPolicy}
              className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 rounded-lg text-sm hover:shadow-lg transition"
            >
              <Download size={16} /> Download
            </button>
            <button
              onClick={copyPolicy}
              className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg text-sm hover:shadow-lg transition"
            >
              <Copy size={16} /> Copy
            </button>
            <div className="p-2 rounded-md bg-slate-800 border border-slate-700 flex items-center gap-2">
              <ShieldCheck className="text-cyan-400" />
              <span className="text-xs">Trusted</span>
            </div>
          </div>
        </div>

        {/* Top interactive area */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Left: short summary & quick actions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-cyan-400 mt-1" size={28} />
              <div>
                <h3 className="font-semibold text-lg">At a glance</h3>
                <p className="text-slate-300 mt-2">{policyText.shortSummary}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => setShowFullPolicy((s) => !s)}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm"
                  >
                    {showFullPolicy ? "Hide Full Policy" : "Read Full Policy"}
                  </button>

                  <button
                    onClick={() => {
                      // Quick consent: Accept all (demo)
                      setConsent({ essential: true, analytics: true, marketing: true });
                      alert("Thanks — consent saved (demo).");
                    }}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-sm"
                  >
                    Accept All (demo)
                  </button>

                  <button
                    onClick={() => {
                      setConsent({ essential: true, analytics: false, marketing: false });
                      alert("Updated to essential-only (demo).");
                    }}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm"
                  >
                    Essential Only
                  </button>
                </div>
              </div>
            </div>

            {/* Expandable full policy */}
            <AnimatePresence>
              {showFullPolicy && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-6 overflow-hidden"
                >
                  {policyText.sections.map((s) => (
                    <div key={s.id} className="mb-6">
                      <h4 className="font-semibold text-cyan-300 mb-2">{s.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{s.content}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Cookie controls & quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cookie className="text-amber-400" />
                <div>
                  <h4 className="font-semibold">Cookie Preferences</h4>
                  <p className="text-xs text-slate-300">Manage tracking and personalization</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-2">
              {/* Essential */}
              <div className="flex items-center justify-between px-2 py-2 bg-slate-900/30 rounded">
                <div>
                  <div className="text-sm font-semibold">Essential Cookies</div>
                  <div className="text-xs text-slate-300">Necessary for site functionality</div>
                </div>
                <div className="text-xs text-slate-400">Always On</div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between px-2 py-2 bg-slate-900/20 rounded">
                <div>
                  <div className="text-sm font-semibold">Analytics</div>
                  <div className="text-xs text-slate-300">Usage & performance</div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={() => toggleCategory("analytics")}
                      className="sr-only"
                    />
                    <span
                      className={`w-10 h-5 rounded-full transition-colors ${
                        consent.analytics ? "bg-cyan-500" : "bg-slate-700"
                      }`}
                    />
                  </label>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between px-2 py-2 bg-slate-900/20 rounded">
                <div>
                  <div className="text-sm font-semibold">Marketing</div>
                  <div className="text-xs text-slate-300">Offers, recommendations</div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={() => toggleCategory("marketing")}
                      className="sr-only"
                    />
                    <span
                      className={`w-10 h-5 rounded-full transition-colors ${
                        consent.marketing ? "bg-cyan-500" : "bg-slate-700"
                      }`}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => {
                  setConsent({ essential: true, analytics: true, marketing: true });
                  alert("Consent saved (demo).");
                }}
                className="flex-1 px-3 py-2 bg-cyan-600 rounded-lg"
              >
                Save Preferences
              </button>
              <button
                onClick={() => {
                  setConsent({ essential: true, analytics: false, marketing: false });
                  alert("Preferences updated (demo).");
                }}
                className="px-3 py-2 rounded-lg bg-slate-700"
              >
                Reset
              </button>
            </div>

            <div className="mt-2 text-xs text-slate-400">
              Tip: Preferences are saved locally in your browser in this demo.
            </div>
          </motion.div>
        </div>

        {/* Data Collection Table */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-lg text-cyan-300 mb-4">What we collect & why</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-300">
                  <th className="p-2">Data Type</th>
                  <th className="p-2">Examples</th>
                  <th className="p-2">Purpose</th>
                  <th className="p-2">Retention</th>
                </tr>
              </thead>
              <tbody>
                {DATA_TABLE.map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-700">
                    <td className="p-2 align-top">{row.type}</td>
                    <td className="p-2 align-top text-slate-300">{row.examples}</td>
                    <td className="p-2 align-top text-slate-300">{row.purpose}</td>
                    <td className="p-2 align-top text-slate-300">{row.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Request Form */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg text-cyan-300 mb-2">Data Access / Deletion Request</h3>
            <p className="text-sm text-slate-300 mb-4">
              Request a copy of your personal data, ask for deletion, or request portability. We’ll verify requests to protect your privacy.
            </p>

            <form onSubmit={submitDataRequest} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300">Full name</label>
                <input
                  value={requestData.name}
                  onChange={(e) => setRequestData((s) => ({ ...s, name: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded bg-slate-900/30 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300">Email</label>
                <input
                  value={requestData.email}
                  onChange={(e) => setRequestData((s) => ({ ...s, email: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded bg-slate-900/30 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300">Order ID (optional)</label>
                <input
                  value={requestData.orderId}
                  onChange={(e) => setRequestData((s) => ({ ...s, orderId: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded bg-slate-900/30 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300">Request type</label>
                <select
                  value={requestData.requestType}
                  onChange={(e) => setRequestData((s) => ({ ...s, requestType: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded bg-slate-900/30 text-sm outline-none"
                >
                  <option value="access">Access my data</option>
                  <option value="delete">Delete my data</option>
                  <option value="portability">Data portability</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300">Message (optional)</label>
                <textarea
                  value={requestData.message}
                  onChange={(e) => setRequestData((s) => ({ ...s, message: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded bg-slate-900/30 text-sm outline-none"
                  rows={3}
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={requesting}
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm"
                >
                  {requesting ? "Submitting..." : "Submit Request"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRequestData({ name: "", email: "", orderId: "", requestType: "access", message: "" });
                    setRequestStatus(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-700 text-sm"
                >
                  Reset
                </button>
              </div>

              {requestStatus && (
                <div className={`mt-3 p-3 rounded ${requestStatus.ok ? "bg-emerald-800" : "bg-amber-900"}`}>
                  <div className="flex items-start gap-2">
                    <div>{requestStatus.ok ? <CheckCircle className="text-emerald-400" /> : <Trash2 className="text-amber-400" />}</div>
                    <div className="text-sm text-slate-100">{requestStatus.message}</div>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* Right: Contact + quick privacy tips */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div>
              <h3 className="font-semibold text-lg text-cyan-300">Contact Privacy Team</h3>
              <p className="text-sm text-slate-300">For legal or privacy concerns, reach out directly:</p>

              <div className="mt-3 flex flex-col gap-2">
                <a href="mailto:privacy@laptopiya.com" className="flex items-center gap-2 px-3 py-2 rounded bg-slate-900/30">
                  <Mail size={16} /> privacy@laptopiya.com
                </a>
                <a href="mailto:support@laptopiya.com" className="flex items-center gap-2 px-3 py-2 rounded bg-slate-900/30">
                  <Mail size={16} /> support@laptopiya.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-cyan-200 mb-2">Privacy Tips</h4>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Use a unique password for your account.</li>
                <li>• Enable two-factor authentication where available.</li>
                <li>• Review your cookie preferences regularly.</li>
                <li>• Only share order IDs when contacting support.</li>
              </ul>
            </div>

            <div className="mt-2 text-xs text-slate-400">
              Laptopiya respects Indian privacy laws and international best practices. This page is for informational purposes and not legal advice.
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
          <div>
            <h4 className="font-semibold text-lg">Want this policy as a PDF or to talk to our legal team?</h4>
            <p className="text-sm text-slate-300">Contact privacy@laptopiya.com and we'll provide a signed copy & enterprise-level SLA if needed.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                downloadPolicy();
                alert("Downloaded: Laptopiya-Privacy-Policy.txt (for PDF, contact privacy@laptopiya.com)");
              }}
              className="px-4 py-2 rounded-lg bg-cyan-600"
            >
              <Download size={14} /> Download TXT
            </button>
            <button
              onClick={() => {
                copyPolicy();
              }}
              className="px-4 py-2 rounded-lg bg-slate-700"
            >
              <Copy size={14} /> Copy Text
            </button>
            <a
              href="mailto:privacy@laptopiya.com?subject=Request%20for%20Signed%20Privacy%20Policy"
              className="px-4 py-2 rounded-lg bg-emerald-600"
            >
              <Mail size={14} /> Request Signed Copy
            </a>
          </div>
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="text-cyan-300 font-semibold">Laptopiya</span> — Privacy by Design.
        </footer>
      </div>
    </div>
  );
}
