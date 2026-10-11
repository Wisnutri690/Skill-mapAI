import React, { useState } from "react";

interface AnalyzePageProps {
    onBack: () => void;
}

export function AnalyzePage({ onBack }: AnalyzePageProps) {

    const [cvFile, setCvFile] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.type === 'application/pdf' || selectedFile.name.endsWith('.pdf')) {
                setCvFile(selectedFile);
            } else {
                alert('Mohon unggah file dengan format PDF.');
            }
        }
    }

    const isFormValid = cvFile !== null && jobDescription.trim().length > 0;

    const handleAnalyze = () => {
        if (!isFormValid) return;
        console.log("Data siap dianalisis:", {
            cvFile,
            jobDescription: jobDescription.trim(),
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h1 className="text-2xl font-bold mb-2">Analyze Skills</h1>
                <p className="text-slate-600 text-sm mb-6">
                    Unggah CV Anda dan masukkan deskripsi pekerjaan untuk memulai analisis.
                </p>

                <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Upload CV (Format PDF)
                    </label>

                    {!cvFile ? (
                        <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 cursor-pointer bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <svg className="w-8 h-8 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-sm font-medium text-slate-600">
                                Klik untuk memilih file PDF
                            </span>
                            <span className="text-xs text-slate-400 mt-1">Maksimal 1 file PDF</span>
                            <input
                                type="file"
                                accept=".pdf,application/pdf"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    ) : (
                        <div className="flex items-center justify-between p-4 bg-blue-50/60 border border-blue-200 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                                    PDF
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800 line-clamp-1">{cvFile.name}</p>
                                    <p className="text-xs text-slate-500">{(cvFile.size / 1024).toFixed(1)} KB</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCvFile(null)}
                                className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded hover:bg-red-50 cursor-pointer transition-colors"
                            >
                                Ganti File
                            </button>
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <label htmlFor="job-description" className="block text-sm font-semibold text-slate-700">
                            Job Description
                        </label>
                        <span className="text-xs text-slate-400">
                            {jobDescription.trim().length} karakter
                        </span>
                    </div>

                    <textarea
                        id="job-description"
                        rows={6}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Tempel (paste) kualifikasi dan deskripsi pekerjaan yang ingin Anda lamar di sini..."
                        className="w-full p-3.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all resize-y placeholder:text-slate-400"
                    />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                        type="button"
                        onClick={onBack}
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold cursor-pointer transition-colors"
                    >
                        Kembali
                    </button>

                    <button
                        type="button"
                        onClick={handleAnalyze}
                        disabled={!isFormValid}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 text-white rounded-xl text-sm font-semibold cursor-pointer transition-all flex items-center gap-2 shadow-xs"
                    >
                        <span>Analyze Skills</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}