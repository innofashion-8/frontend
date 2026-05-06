'use client';

import React from 'react';
import toast from 'react-hot-toast';
import { Copy, Building2, User, Hash, FileText } from 'lucide-react';
import { PaymentDetails } from '@/types/event';
import palette from '@/config/palette';

interface PaymentInstructionBoxProps {
  paymentDetails: PaymentDetails;
  price: number;
}

export default function PaymentInstructionBox({ paymentDetails, price }: PaymentInstructionBoxProps) {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${label} — COPY INITIATED`, {
        style: {
          background: palette.onyx,
          color: palette.stucco,
          border: `1px solid ${palette.graphite}`,
          fontWeight: 900,
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          fontSize: '11px',
        },
        duration: 2000,
        icon: '📋',
      });
    });
  };

  return (
    <div
      className="border relative overflow-hidden"
      style={{
        backgroundColor: palette.obsidian,
        borderColor: palette.graphite,
      }}
    >
      {/* Watermark */}
      <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none select-none">
        <span className="text-8xl font-black italic" style={{ color: palette.stucco }}>
          $
        </span>
      </div>

      {/* Header */}
      <div
        className="px-8 py-5 border-b flex items-center gap-3"
        style={{ borderColor: palette.graphite, backgroundColor: `${palette.onyx}` }}
      >
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: palette.greige, boxShadow: `0 0 10px ${palette.greige}` }}
        />
        <h3
          className="text-[10px] font-black tracking-[0.4em] uppercase"
          style={{ color: palette.greige }}
        >
          PAYMENT PROTOCOL
        </h3>
      </div>

      {/* Body */}
      <div className="px-6 py-4 space-y-6 relative z-10">
        {/* Transfer Amount */}
        <div>
          <p className="text-[9px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>
            TRANSFER AMOUNT
          </p>
          <p className="text-2xl font-black tracking-widest" style={{ color: palette.stucco }}>
            Rp {price.toLocaleString('id-ID')}
          </p>
        </div>

        {/* Bank Name */}
        {paymentDetails.bank_name && (
          <div className="flex items-start gap-4">
            <Building2 size={16} style={{ color: palette.ash, marginTop: 2, flexShrink: 0 }} />
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.2em] mb-1 uppercase" style={{ color: palette.ash }}>
                FINANCIAL NODE
              </p>
              <p className="text-sm font-black tracking-widest uppercase" style={{ color: palette.stucco }}>
                {paymentDetails.bank_name}
              </p>
            </div>
          </div>
        )}

        {/* Account Name */}
        {paymentDetails.bank_account_name && (
          <div className="flex items-start gap-4">
            <User size={16} style={{ color: palette.ash, marginTop: 2, flexShrink: 0 }} />
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.2em] mb-1 uppercase" style={{ color: palette.ash }}>
                ACCOUNT HOLDER
              </p>
              <p className="text-sm font-black tracking-widest uppercase" style={{ color: palette.stucco }}>
                {paymentDetails.bank_account_name}
              </p>
            </div>
          </div>
        )}

        {/* Account Number — Copyable */}
        {paymentDetails.bank_account_number && (
          <div className="flex items-start gap-4">
            <Hash size={16} style={{ color: palette.ash, marginTop: 2, flexShrink: 0 }} />
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.2em] mb-1 uppercase" style={{ color: palette.ash }}>
                ACCOUNT ID
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-lg font-black tracking-[0.3em]" style={{ color: palette.greige }}>
                  {paymentDetails.bank_account_number}
                </p>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentDetails.bank_account_number!, 'ACCOUNT ID')}
                  className="flex items-center gap-2 px-3 py-1.5 border text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer hover:scale-[1.05]"
                  style={{
                    borderColor: palette.graphite,
                    color: palette.greige,
                    backgroundColor: palette.onyx,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = palette.greige;
                    e.currentTarget.style.backgroundColor = palette.graphite;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = palette.graphite;
                    e.currentTarget.style.backgroundColor = palette.onyx;
                  }}
                >
                  <Copy size={12} /> COPY
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Transfer Note — Copyable */}
        {paymentDetails.transfer_note_format && (
          <div className="flex items-start gap-4">
            <FileText size={16} style={{ color: palette.ash, marginTop: 2, flexShrink: 0 }} />
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.2em] mb-1 uppercase" style={{ color: palette.ash }}>
                TRANSFER NOTE
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <p
                  className="text-[.7rem] lg:text-sm font-black tracking-wider px-3 py-2 border"
                  style={{
                    color: palette.stucco,
                    borderColor: palette.graphite,
                    backgroundColor: palette.onyx,
                  }}
                >
                  {paymentDetails.transfer_note_format}
                </p>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentDetails.transfer_note_format!, 'TRANSFER NOTE')}
                  className="flex items-center gap-2 px-3 py-1.5 border text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer hover:scale-[1.05]"
                  style={{
                    borderColor: palette.graphite,
                    color: palette.greige,
                    backgroundColor: palette.onyx,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = palette.greige;
                    e.currentTarget.style.backgroundColor = palette.graphite;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = palette.graphite;
                    e.currentTarget.style.backgroundColor = palette.onyx;
                  }}
                >
                  <Copy size={12} /> COPY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="px-8 py-4 border-t"
        style={{ borderColor: palette.graphite }}
      >
        <p className="text-[9px] tracking-[0.15em] uppercase" style={{ color: palette.ash }}>
          ⚠ TRANSFER EXACT AMOUNT. INCLUDE THE TRANSFER NOTE FOR FASTER VERIFICATION.
        </p>
      </div>
    </div>
  );
}
