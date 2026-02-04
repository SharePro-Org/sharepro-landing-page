import { useMutation } from "@apollo/client/react";
import React, { useState, useRef } from "react";
import { CREATE_SUPPORT_REQUEST } from "~/apollo/queries";

interface FormData {
    issueType: string;
    subject: string;
    contactEmail: string;
    screenshot: File | null;
    description: string;
}

interface IssueType {
    value: string;
    label: string;
}

interface SupportRequestModalProps {
    open: boolean;
    onClose: () => void;
    issueTypes: IssueType[];
}

const SupportRequestModal: React.FC<SupportRequestModalProps> = ({
    open,
    onClose,
    issueTypes,
}) => {
    const [formData, setFormData] = useState<FormData>({
        issueType: "",
        subject: "",
        contactEmail: "",
        screenshot: null,
        description: "",
    });
    const [submitError, setSubmitError] = useState<Error | null>(null);
    const [submitLoading, setSubmitLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [submitSupportRequest] = useMutation(CREATE_SUPPORT_REQUEST);


    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     handleInputChange("screenshot", file || null);
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setSubmitLoading(true);

        try {
            console.log("Submitting:", formData);
            const { data } = await submitSupportRequest({
                variables: {
                    issueType: formData.issueType,
                    subject: formData.subject,
                    contactEmail: formData.contactEmail,
                    description: formData.description,
                },
            });

            onClose();
        } catch (err: any) {
            setSubmitError(err);
        } finally {
            setSubmitLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
        >
            <div
                className="bg-white text-[#030229] rounded-lg shadow-lg w-full max-w-lg p-6 relative animate-fadeIn border border-gray-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    ✕
                </button>

                <p className="font-semibold text-lg text-center mb-6">
                    Submit a Support Request
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Issue Type */}
                    <div>
                        <label
                            htmlFor="issueType"
                            className="block text-sm font-medium mb-2"
                        >
                            Issue Type *
                        </label>
                        <select
                            id="issueType"
                            value={formData.issueType}
                            onChange={(e) => handleInputChange("issueType", e.target.value)}
                            className="w-full border border-[#E4E7EC] rounded-md p-3 text-sm"
                            required
                        >
                            <option value="">Select an issue type</option>
                            {issueTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Subject */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2"
                        >
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            className="w-full border border-[#E4E7EC] rounded-md p-3 text-sm"
                            placeholder="Brief description of your issue"
                            required
                        />
                    </div>

                    {/* Contact Email */}
                    <div>
                        <label
                            htmlFor="contactEmail"
                            className="block text-sm font-medium mb-2"
                        >
                            Contact Email *
                        </label>
                        <input
                            type="email"
                            id="contactEmail"
                            value={formData.contactEmail}
                            onChange={(e) =>
                                handleInputChange("contactEmail", e.target.value)
                            }
                            className="w-full border border-[#E4E7EC] rounded-md p-3 text-sm"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    {/* Screenshot Upload */}
                    {/* <div>
                        <label
                            htmlFor="screenshot"
                            className="block text-sm font-medium mb-2"
                        >
                            Attach Screenshot
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                id="screenshot"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                                ref={fileInputRef}
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full border border-dashed border-[#E4E7EC] rounded-md p-4 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                {formData.screenshot ? (
                                    <span className="text-green-600">
                                        ✓ {formData.screenshot.name} selected
                                    </span>
                                ) : (
                                    <span>Click to upload a screenshot (PNG, JPG, GIF)</span>
                                )}
                            </button>
                        </div>
                    </div> */}

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium mb-2"
                        >
                            Description *
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => handleInputChange("description", e.target.value)}
                            rows={3}
                            className="w-full border border-[#E4E7EC] rounded-md p-3 text-sm resize-vertical"
                            placeholder="Please provide detailed information about your issue..."
                            required
                        />
                    </div>

                    {/* Error Display */}
                    {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-3">
                            <p className="text-red-600 text-sm">
                                Error submitting request: {submitError.message}
                            </p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors"
                            disabled={submitLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitLoading}
                            className="px-6 py-2 bg-primary text-white rounded-md text-sm hover:bg-[#1a4bd9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {submitLoading && (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            )}
                            {submitLoading ? "Submitting..." : "Submit Request"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SupportRequestModal;
