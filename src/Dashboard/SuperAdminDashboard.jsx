import React, { useState } from "react";
import { Shield, CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuperAdminDashboard() {
  const [expandedAdmin, setExpandedAdmin] = useState(null);

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@store.com",
      role: "Product Manager",
      access: "Active",
      pendingActions: [
        { id: 101, type: "Product Deletion", detail: "Deleted: iPhone 15", status: "pending" },
        { id: 102, type: "Product Update", detail: "Updated: MacBook Air M3", status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Neha Verma",
      email: "neha@store.com",
      role: "Inventory Admin",
      access: "Suspended",
      pendingActions: [
        { id: 103, type: "Product Creation", detail: "Added: Samsung Galaxy Z Fold 6", status: "pending" },
      ],
    },
  ]);

  const handleApprove = (adminId, actionId) => {
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === adminId
          ? {
              ...admin,
              pendingActions: admin.pendingActions.map((a) =>
                a.id === actionId ? { ...a, status: "approved" } : a
              ),
            }
          : admin
      )
    );
  };

  const handleReject = (adminId, actionId) => {
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === adminId
          ? {
              ...admin,
              pendingActions: admin.pendingActions.map((a) =>
                a.id === actionId ? { ...a, status: "rejected" } : a
              ),
            }
          : admin
      )
    );
  };

  const toggleExpand = (id) => {
    setExpandedAdmin((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 pt-[8rem] sm:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="text-blue-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-gray-800">SuperAdmin - Manage Admins</h1>
        </div>

        <div className="space-y-6">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div
                onClick={() => toggleExpand(admin.id)}
                className="flex justify-between items-center p-5 cursor-pointer"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{admin.name}</h3>
                  <p className="text-gray-500 text-sm">{admin.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      admin.access === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {admin.access}
                  </span>
                  {expandedAdmin === admin.id ? (
                    <ChevronUp className="text-gray-500" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {expandedAdmin === admin.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-5 space-y-4">
                      <h4 className="font-medium text-gray-700">Pending Actions:</h4>

                      {admin.pendingActions.length === 0 ? (
                        <p className="text-gray-400 text-sm">No pending actions</p>
                      ) : (
                        admin.pendingActions.map((action) => (
                          <div
                            key={action.id}
                            className={`flex justify-between items-center p-3 rounded-xl border ${
                              action.status === "approved"
                                ? "border-green-300 bg-green-50"
                                : action.status === "rejected"
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 bg-gray-50"
                            }`}
                          >
                            <div>
                              <p className="font-medium text-gray-700">{action.type}</p>
                              <p className="text-sm text-gray-500">{action.detail}</p>
                            </div>

                            {action.status === "pending" ? (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleApprove(admin.id, action.id)}
                                  className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs rounded-lg flex items-center gap-1"
                                >
                                  <CheckCircle2 size={14} /> Approve
                                </button>
                                <button
                                  onClick={() => handleReject(admin.id, action.id)}
                                  className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg flex items-center gap-1"
                                >
                                  <XCircle size={14} /> Reject
                                </button>
                              </div>
                            ) : (
                              <span
                                className={`text-xs font-semibold ${
                                  action.status === "approved"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {action.status.toUpperCase()}
                              </span>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
