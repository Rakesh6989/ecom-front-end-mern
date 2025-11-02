import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Handshake,
  AlertTriangle,
  Download,
  Copy,
  Mail,
  Info,
  CheckCircle2,
  ChevronDown,
  Globe,
} from "lucide-react";

export default function LaptopiyaTermsAndConditions() {
  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(false);

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: <Handshake className="text-emerald-400" size={20} />,
      content:
        "By accessing or using Laptopiya’s website, services, or products, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
    },
    {
      id: 2,
      title: "Account & User Responsibilities",
      icon: <ShieldCheck className="text-cyan-400" size={20} />,
      content:
        "You are responsible for maintaining confidentiality of your account credentials. Any activity under your account is your responsibility. Report unauthorized activity immediately to support@laptopiya.com.",
    },
    {
      id: 3,
      title: "Orders, Pricing & Payments",
      icon: <FileText className="text-blue-400" size={20} />,
      content:
        "All prices listed are inclusive of applicable taxes unless stated otherwise. Laptopiya reserves the right to modify product pricing or discontinue items without notice. Payments are processed through secure gateways.",
    },
    {
      id: 4,
      title: "Returns & Refunds",
      icon: <Info className="text-amber-400" size={20} />,
      content:
        "Eligible products can be returned within 7 days of delivery under our Return Policy. Refunds are issued after inspection. To initiate, visit your orders page or email returns@laptopiya.com.",
    },
    {
      id: 5,
      title: "Intellectual Property",
      icon: <Globe className="text-purple-400" size={20} />,
      content:
        "All logos, designs, texts, and images on Laptopiya.com are owned by Laptopiya Pvt. Ltd. Reproduction or distribution without written permission is prohibited.",
    },
    {
      id: 6,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="text-red-400" size={20} />,
      content:
        "Laptopiya shall not be liable for any indirect, incidental, or consequential damages arising out of use or inability to use our website or services.",
    },
    {
      id: 7,
      title: "Changes to Terms",
      icon: <FileText className="text-gray-400" size={20} />,
      content:
        "We reserve the right to modify these terms at any time. Changes will be posted here with an updated revision date. Continued use means acceptance of new terms.",
    },
  ];

  const copyTerms = () => {
    const text = sections.map((s) => `• ${s.title}\n${s.content}\n`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadTerms = () => {
    const text = sections.map((s) => `${s.title}\n${s.content}\n\n`).join("");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Laptopiya-Terms-And-Conditions.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pt-[8rem] from-[#0A0F1D] via-[#101624] to-[#0A0F1D] text-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Laptopiya Terms & Conditions
            </h1>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Read these terms carefully before using Laptopiya’s services.
              Transparency and fairness are the foundation of our customer
              relationships.
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={downloadTerms}
              className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700"
            >
              <Download size={18} /> Download
            </button>
            <button
              onClick={copyTerms}
              className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700"
            >
              <Copy size={18} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <ShieldCheck className="text-cyan-400 mb-2" />
            <p className="text-sm text-slate-300 text-center">
              Secure Transactions
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <Handshake className="text-emerald-400 mb-2" />
            <p className="text-sm text-slate-300 text-center">Fair Returns</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <FileText className="text-blue-400 mb-2" />
            <p className="text-sm text-slate-300 text-center">
              Transparent Policy
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <CheckCircle2 className="text-green-400 mb-2" />
            <p className="text-sm text-slate-300 text-center">
              Verified Legal Terms
            </p>
          </div>
        </div>

        {/* Terms List */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl overflow-hidden">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-slate-700/70">
              <button
                onClick={() =>
                  setExpanded(expanded === section.id ? null : section.id)
                }
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/40 transition"
              >
                <div className="flex items-center gap-3 text-left">
                  {section.icon}
                  <span className="font-semibold text-slate-200">
                    {section.title}
                  </span>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    expanded === section.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expanded === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-slate-300 leading-relaxed"
                  >
                    {section.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact + Footer CTA */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <div>
            <h3 className="font-semibold text-lg">
              Questions about these Terms?
            </h3>
            <p className="text-sm text-slate-300">
              We’re transparent about everything. Contact our legal or support
              team anytime for clarification.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:support@laptopiya.com"
              className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 text-sm"
            >
              <Mail size={16} /> Contact Support
            </a>
            <a
              href="mailto:legal@laptopiya.com"
              className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 text-sm"
            >
              <Mail size={16} /> Contact Legal
            </a>
          </div>
        </div>

        <footer className="mt-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Laptopiya</span> — All
          Rights Reserved.
          <br />
          Last Updated: {new Date().toLocaleDateString()}
        </footer>
      </div>
    </div>
  );
}
