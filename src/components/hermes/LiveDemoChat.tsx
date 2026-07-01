import { useEffect, useRef, useState, useCallback } from 'react';

interface ChatMsg {
  side: 'right' | 'left' | 'typing' | 'done';
  text?: string;
  lines?: string[];
  time?: string;
}

const TIMELINE: { delay: number; msg: ChatMsg }[] = [
  { delay: 0, msg: { side: 'right', text: 'Tạo báo giá cho Cty Thép Bình Minh — 100 cây thép hộp 50×50', time: '08:42' } },
  { delay: 1500, msg: { side: 'typing' } },
  { delay: 3000, msg: { side: 'left', text: 'Đang tra cứu KH-042 + bảng giá thép hộp hôm nay...' } },
  { delay: 4500, msg: { side: 'typing' } },
  { delay: 6000, msg: { side: 'left', lines: ['✓ Tìm thấy KH-042 — Cty Thép Bình Minh', '✓ Bảng giá hôm nay: 1.865.000₫/cây'] } },
  { delay: 7500, msg: { side: 'left', lines: ['💰 Tính: 100 × 1.865.000 = 186.500.000₫', 'Áp CK 3% (khách VIP) → 180.905.000₫'] } },
  { delay: 9000, msg: { side: 'typing' } },
  { delay: 10500, msg: { side: 'left', text: '📄 BG-20260624.docx — Báo giá đã sẵn sàng. Anh duyệt em gửi email?' } },
  { delay: 12000, msg: { side: 'right', text: 'OK gửi', time: '08:43' } },
  { delay: 13000, msg: { side: 'typing' } },
  { delay: 14000, msg: { side: 'left', lines: ['✅ Email gửi tới khient@binhminhsteel.vn', '🗓 Đặt lịch nhắc: gọi lại 30/06', '📌 Đã lưu skill "Báo giá thép" — lần sau chạy nhanh hơn.'] } },
  { delay: 16000, msg: { side: 'done' } },
];

const TOTAL_DURATION = 21000; // 21s + 5s pause = 26s total loop

export default function LiveDemoChat() {
  const ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number[]>([]);
  const loopRef = useRef<number>(0);
  const [step, setStep] = useState(-1);
  const [visible, setVisible] = useState(false);

  const addLine = useCallback((msg: ChatMsg) => {
    if (!bodyRef.current) return;
    const container = bodyRef.current;

    // Remove typing indicator if present
    const typingEl = container.querySelector('.typing-indicator');
    if (typingEl) typingEl.remove();

    const div = document.createElement('div');

    if (msg.side === 'right') {
      div.className = 'flex justify-end mb-3';
      div.innerHTML = `
        <div class="max-w-[78%] bg-[#F26C2C] text-white rounded-2xl rounded-br-md px-3.5 py-2.5 text-sm leading-relaxed">
          <div>${msg.text || ''}</div>
          <div class="text-white/50 text-[11px] text-right mt-1">${msg.time || ''}</div>
        </div>
      `;
    } else if (msg.side === 'left') {
      div.className = 'flex mb-3';
      const textHtml = msg.lines
        ? msg.lines.map(l => `<div>${l}</div>`).join('')
        : `<div>${msg.text || ''}</div>`;
      div.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-[#F26C2C] flex items-center justify-center text-white text-xs mr-2 flex-shrink-0 mt-1">🪶</div>
        <div class="max-w-[78%] bg-[#2A3D5F] text-white rounded-2xl rounded-bl-md px-3.5 py-2.5 text-sm leading-relaxed">
          ${textHtml}
        </div>
      `;
    } else if (msg.side === 'typing') {
      div.className = 'typing-indicator flex mb-3';
      div.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-[#F26C2C] flex items-center justify-center text-white text-xs mr-2 flex-shrink-0 mt-1">🪶</div>
        <div class="bg-[#2A3D5F] text-white rounded-2xl rounded-bl-md px-4 py-3" style="max-width:70px">
          <div class="flex gap-1.5 items-center">
            <span class="w-1.5 h-1.5 rounded-full bg-[#F26C2C] animate-pulse" style="animation-duration:1.4s"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#F26C2C] animate-pulse" style="animation-duration:1.4s;animation-delay:0.2s"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#F26C2C] animate-pulse" style="animation-duration:1.4s;animation-delay:0.4s"></span>
          </div>
        </div>
      `;
    } else if (msg.side === 'done') {
      div.className = 'text-center mt-4';
      div.innerHTML = `<span class="text-white/50 text-sm italic">⏱ Từ lệnh đến hoàn thành: 16 giây — anh không động ngón tay</span>`;
    }

    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }, []);

  const clearChat = useCallback(() => {
    if (bodyRef.current) bodyRef.current.innerHTML = '';
  }, []);

  const runTimeline = useCallback(() => {
    clearChat();
    timerRef.current.forEach(t => clearTimeout(t));
    timerRef.current = [];

    TIMELINE.forEach(({ delay, msg }) => {
      const t = window.setTimeout(() => addLine(msg), delay);
      timerRef.current.push(t);
    });

    const timeout = window.setTimeout(() => {
      loopRef.current++;
      runTimeline();
    }, TOTAL_DURATION);
    timerRef.current.push(timeout);
  }, [addLine, clearChat]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(runTimeline, 600);
      timerRef.current.push(t);
    }
    return () => {
      timerRef.current.forEach(t => clearTimeout(t));
    };
  }, [visible, runTimeline]);

  return (
    <div ref={ref}>
      {/* Telegram frame */}
      <div className="mx-auto" style={{ maxWidth: 480 }}>
        <div
          className="rounded-[20px] overflow-hidden shadow-2xl border border-white/5"
          style={{ backgroundColor: '#0E1621' }}
        >
          {/* Header */}
          <div className="flex items-center px-4 py-3.5" style={{ backgroundColor: '#17212B' }}>
            <svg className="w-5 h-5 text-white/60 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="w-10 h-10 rounded-full bg-[#F26C2C] flex items-center justify-center text-white font-bold text-lg mr-3">🪶</div>
            <div className="flex-1">
              <div className="text-white font-semibold text-[15px]">Hermes Bot</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                <span className="text-emerald-400 text-[11px]">online</span>
              </div>
            </div>
            <div className="text-white/40 text-xl">⋯</div>
          </div>

          {/* Body */}
          <div
            ref={bodyRef}
            className="px-3.5 py-4 overflow-y-auto"
            style={{
              backgroundColor: '#0E1621',
              height: 420,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Input footer */}
          <div className="flex items-center px-4 py-3 gap-3" style={{ backgroundColor: '#17212B' }}>
            <span className="text-white/40 text-lg">📎</span>
            <div className="flex-1 text-white/30 text-sm">Message Hermes...</div>
            <div className="w-8 h-8 rounded-full bg-[#F26C2C] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
