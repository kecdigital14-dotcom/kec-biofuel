'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Leaf, ChevronRight, ChevronLeft, CheckCircle2, MapPin,
    Wheat, Factory, Zap, TrendingUp, DollarSign, Users,
    Wind, BarChart3, Award, RotateCcw, Info, AlertCircle,
    Sparkles, ArrowRight
} from 'lucide-react';

const POPPINS_URL = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap";

const STEPS = [
    {
        id: 1, title: 'Location & Land', subtitle: 'Tell us about your site',
        icon: MapPin, color: 'green',
        questions: [
            {
                id: 'state', label: 'Which state is the plant located in?', type: 'select', required: true, icon: '📍',
                options: ['Uttar Pradesh', 'Punjab', 'Haryana', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra', 'Bihar', 'Gujarat', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Odisha', 'West Bengal', 'Other']
            },
            { id: 'landArea', label: 'Available land area', type: 'number', placeholder: 'e.g. 5', unit: 'Acres', min: 1, required: true, icon: '🌾', hint: 'Minimum 2 acres recommended for a standard CBG plant' },
            {
                id: 'landOwnership', label: 'Land ownership status', type: 'radio', required: true, icon: '📋',
                options: ['Owned', 'Leased', 'To be acquired']
            },
            {
                id: 'distanceFromFeedstock', label: 'Distance from primary feedstock source', type: 'select', required: true, icon: '🚛', hint: 'Closer feedstock = lower transport cost',
                options: ['< 5 km', '5–15 km', '15–30 km', '> 30 km']
            }
        ]
    },
    {
        id: 2, title: 'Feedstock', subtitle: 'Raw material availability',
        icon: Wheat, color: 'orange',
        questions: [
            {
                id: 'feedstockType', label: 'Primary feedstock type', type: 'multiselect', required: true, icon: '🌿', hint: 'Select all that apply. Mixed feedstock improves gas yield',
                options: ['Paddy Straw', 'Sugarcane Bagasse', 'Cattle Dung', 'Poultry Litter', 'Press Mud', 'Municipal Solid Waste', 'Food Waste', 'Vegetable Waste', 'Cotton Stalks', 'Maize Stalks', 'Other Agricultural Waste']
            },
            { id: 'feedstockAvailability', label: 'Daily feedstock availability', type: 'number', placeholder: 'e.g. 50', unit: 'TPD', min: 10, required: true, icon: '⚖️', hint: '10 TPD feedstock ≈ 1 TPD CBG output (approx)' },
            {
                id: 'feedstockCost', label: 'Average feedstock procurement cost', type: 'select', required: true, icon: '💰',
                options: ['Free (own farm/waste)', '< ₹500/tonne', '₹500–₹1500/tonne', '₹1500–₹3000/tonne', '> ₹3000/tonne']
            },
            {
                id: 'feedstockSeasonal', label: 'Is feedstock available year-round?', type: 'radio', required: true, icon: '📅',
                options: ['Yes, 365 days', 'Seasonal (6–9 months)', 'Seasonal (< 6 months)']
            }
        ]
    },
    {
        id: 3, title: 'Plant Capacity', subtitle: 'Size and technical setup',
        icon: Factory, color: 'green',
        questions: [
            {
                id: 'plantCapacity', label: 'Desired CBG plant capacity', type: 'select', required: true, icon: '🏭', hint: 'KEC recommends starting with 1–2 TPD for optimal ROI',
                options: ['250 kg/day (Micro)', '500 kg/day (Small)', '1 TPD (Standard)', '2 TPD (Medium)', '5 TPD (Large)', '10 TPD (Industrial)', 'Custom']
            },
            {
                id: 'technology', label: 'Preferred technology type', type: 'radio', required: true, icon: '⚙️',
                options: ['Wet Anaerobic Digestion', 'Dry Anaerobic Digestion', 'Not Sure (KEC will advise)']
            },
            {
                id: 'digestatePlan', label: 'Plan for digestate (bio-slurry)?', type: 'multiselect', required: true, icon: '♻️', hint: 'Digestate adds significant additional revenue',
                options: ['Sell as organic fertilizer', 'Use on own farm', 'Give to nearby farmers', 'Not yet decided']
            },
            {
                id: 'powerConnection', label: 'Grid power availability at site', type: 'radio', required: true, icon: '🔌',
                options: ['Yes, 3-phase available', 'Only single phase', 'No grid connection']
            }
        ]
    },
    {
        id: 4, title: 'Gas Utilization', subtitle: 'How you plan to use CBG',
        icon: Wind, color: 'orange',
        questions: [
            {
                id: 'cbgUsage', label: 'Primary CBG utilization plan', type: 'multiselect', required: true, icon: '⛽', hint: 'OMC sales give guaranteed offtake under SATAT scheme',
                options: ['Sell to OMCs (GAIL/IOCL/BPCL)', 'Own CNG filling station', 'Industrial piped supply', 'Fleet vehicle refueling', 'Power generation', 'Cooking gas for households', 'Not yet decided']
            },
            {
                id: 'satarRegistered', label: 'Awareness of SATAT scheme?', type: 'radio', required: true, icon: '📜',
                options: ['Yes, already registered', 'Aware but not registered', 'Not aware – need KEC help']
            },
            {
                id: 'targetCbgPrice', label: 'Expected CBG selling price', type: 'select', required: true, icon: '💵', hint: 'SATAT guaranteed price is ₹46/kg from OMCs',
                options: ['₹46/kg (OMC rate)', '₹50–₹55/kg', '₹55–₹65/kg (premium)', 'Not sure']
            },
            {
                id: 'co2Plan', label: 'Plan for captured CO₂?', type: 'radio', required: true, icon: '🌬️', hint: 'CO₂ can add ₹15,000–₹25,000/tonne additional revenue',
                options: ['Sell to food/beverage industry', 'Not planning to capture', 'Need guidance']
            }
        ]
    },
    {
        id: 5, title: 'Investment', subtitle: 'Finance and funding',
        icon: DollarSign, color: 'green',
        questions: [
            {
                id: 'investmentBudget', label: 'Total investment budget available', type: 'select', required: true, icon: '🏦',
                options: ['< ₹50 Lakhs', '₹50L – ₹1 Cr', '₹1 Cr – ₹3 Cr', '₹3 Cr – ₹5 Cr', '₹5 Cr – ₹10 Cr', '> ₹10 Cr']
            },
            {
                id: 'fundingSource', label: 'Funding source', type: 'multiselect', required: true, icon: '💳', hint: 'NABARD provides up to 30% subsidy for bioenergy projects',
                options: ['Own equity', 'Bank loan', 'NABARD subsidy', 'Government grant', 'Angel/VC investor', 'Partnership model with KEC']
            },
            {
                id: 'roiTimeline', label: 'Expected payback period preference', type: 'radio', required: true, icon: '📈',
                options: ['2–3 years', '3–5 years', '5–7 years', 'No specific target']
            },
            {
                id: 'carbonCredits', label: 'Interest in carbon credit monetization?', type: 'radio', required: true, icon: '🌱', hint: 'CBG plants can earn verified carbon credits worth ₹1–3 Cr/year',
                options: ['Yes, very interested', 'Somewhat interested', 'Not a priority']
            }
        ]
    },
    {
        id: 6, title: 'Team & Operations', subtitle: 'Management readiness',
        icon: Users, color: 'orange',
        questions: [
            {
                id: 'operatorExperience', label: 'Prior experience with bioenergy / agricultural projects?', type: 'radio', required: true, icon: '🎓',
                options: ['Yes, 5+ years', 'Yes, 1–5 years', 'No, first project']
            },
            {
                id: 'teamSize', label: 'Team available to operate the plant', type: 'select', required: true, icon: '👥',
                options: ['0 (need KEC to provide)', '1–3 people', '4–10 people', '10+ people']
            },
            {
                id: 'operationModel', label: 'Preferred operation model', type: 'radio', required: true, icon: '🔧', hint: 'KEC O&M ensures 95%+ uptime with performance guarantees',
                options: ['Self-operated', 'KEC O&M contract', 'Hybrid model']
            },
            {
                id: 'timeline', label: 'Desired commissioning timeline', type: 'select', required: true, icon: '📆',
                options: ['< 6 months', '6–12 months', '12–18 months', '18–24 months', 'Flexible']
            }
        ]
    }
];

function calculateROI(answers) {
    const capacityMap = { '250 kg/day (Micro)': 0.25, '500 kg/day (Small)': 0.5, '1 TPD (Standard)': 1, '2 TPD (Medium)': 2, '5 TPD (Large)': 5, '10 TPD (Industrial)': 10, 'Custom': 2 };
    const capStr = answers.plantCapacity || '1 TPD (Standard)';
    const cbgTPD = capacityMap[capStr] || 1;
    const cbgAnnual = cbgTPD * 330;
    const priceMap = { '₹46/kg (OMC rate)': 46000, '₹50–₹55/kg': 52500, '₹55–₹65/kg (premium)': 60000, 'Not sure': 46000 };
    const cbgPrice = priceMap[answers.targetCbgPrice] || 46000;
    const feedCostMap = { 'Free (own farm/waste)': 0, '< ₹500/tonne': 400, '₹500–₹1500/tonne': 1000, '₹1500–₹3000/tonne': 2000, '> ₹3000/tonne': 3500 };
    const feedstockCostPerT = feedCostMap[answers.feedstockCost] || 1000;
    const feedstockTPD = parseFloat(answers.feedstockAvailability) || cbgTPD * 10;
    const feedstockCostAnnual = feedstockCostPerT * feedstockTPD * 330;
    const cbgRevenue = cbgAnnual * cbgPrice;
    const digestateRevenue = cbgTPD * 8000 * 330;
    const co2Revenue = answers.co2Plan === 'Sell to food/beverage industry' ? cbgTPD * 0.3 * 330 * 20000 : 0;
    const carbonCreditRevenue = answers.carbonCredits === 'Yes, very interested' ? cbgTPD * 500000 : 0;
    const totalRevenue = cbgRevenue + digestateRevenue + co2Revenue + carbonCreditRevenue;
    const opex = cbgTPD * 2000000;
    const totalOpex = opex + feedstockCostAnnual;
    const capexMap = { '250 kg/day (Micro)': 1.5e7, '500 kg/day (Small)': 2.5e7, '1 TPD (Standard)': 4e7, '2 TPD (Medium)': 7e7, '5 TPD (Large)': 1.5e8, '10 TPD (Industrial)': 2.8e8, 'Custom': 7e7 };
    const capex = capexMap[capStr] || 4e7;
    const subsidyRate = (answers.fundingSource || []).includes('NABARD subsidy') ? 0.3 : 0;
    const netCapex = capex * (1 - subsidyRate);
    const ebitda = totalRevenue - totalOpex;
    const paybackYears = ebitda > 0 ? (netCapex / ebitda).toFixed(1) : 'N/A';
    const roi5yr = ebitda > 0 ? (((ebitda * 5 - netCapex) / netCapex) * 100).toFixed(0) : 0;
    return { cbgTPD, cbgAnnual, cbgRevenue, digestateRevenue, co2Revenue, carbonCreditRevenue, totalRevenue, totalOpex, feedstockCostAnnual, ebitda, capex, netCapex, subsidyRate, paybackYears, roi5yr };
}

function fmt(n) {
    if (typeof n !== 'number' || isNaN(n)) return '₹0';
    if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
    if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
    return `₹${n.toLocaleString('en-IN')}`;
}

function Particles() {
    const items = Array.from({ length: 18 }, (_, i) => ({
        id: i, size: Math.random() * 5 + 2, x: Math.random() * 100,
        delay: Math.random() * 5, dur: Math.random() * 7 + 7, op: Math.random() * 0.25 + 0.08
    }));
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {items.map(p => (
                <motion.div key={p.id} className="absolute rounded-full bg-white"
                    style={{ width: p.size, height: p.size, left: `${p.x}%`, bottom: '-8px', opacity: p.op }}
                    animate={{ y: [0, -700], opacity: [p.op, 0] }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }} />
            ))}
        </div>
    );
}

function StepNav({ current }) {
    return (
        <div className="flex items-center justify-between py-3 xl:py-4 overflow-x-auto">
            {STEPS.map((s, i) => {
                const Icon = s.icon;
                const done = current > s.id;
                const active = current === s.id;
                return (
                    <div key={s.id} className="flex items-center flex-1 min-w-0">
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <motion.div
                                animate={active ? { scale: 1.18 } : { scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className={`w-9 h-9 xl:w-11 xl:h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                    ${done
                                        ? 'bg-green-600 border-green-600 text-white shadow-md shadow-green-200'
                                        : active
                                            ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-300'
                                            : 'bg-white border-gray-200 text-gray-400'
                                    }`}
                            >
                                {done ? <CheckCircle2 className="w-3.5 h-3.5 xl:w-4 xl:h-4" /> : <Icon className="w-3 h-3 xl:w-3.5 xl:h-3.5" />}
                            </motion.div>
                            <span className={`text-[8px] xl:text-[10px] font-semibold text-center leading-tight hidden sm:block whitespace-nowrap
                                ${active ? 'text-orange-600' : done ? 'text-green-700' : 'text-gray-400'}`}>
                                {s.title}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className="flex-1 h-0.5 mx-1 rounded-full overflow-hidden bg-gray-200 max-w-[28px] xl:max-w-[48px]">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                                    animate={{ width: done ? '100%' : '0%' }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function QuestionField({ q, value, onChange }) {
    const base = "w-full px-4 py-3 xl:py-3.5 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm xl:text-base";

    if (q.type === 'select') return (
        <div className="relative">
            <select value={value || ''} onChange={e => onChange(q.id, e.target.value)} className={`${base} appearance-none cursor-pointer pr-10`}>
                <option value="">Select an option…</option>
                {q.options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
    );

    if (q.type === 'radio') return (
        <div className="grid gap-2 xl:gap-2.5">
            {q.options.map(o => (
                <motion.label key={o} whileHover={{ scale: 1.005 }}
                    className={`flex items-center gap-3 p-3 xl:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                        ${value === o ? 'border-green-500 bg-green-50 shadow-sm' : 'border-gray-200 hover:border-green-300 hover:bg-green-50/30'}`}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                        ${value === o ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                        {value === o && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <input type="radio" className="hidden" checked={value === o} onChange={() => onChange(q.id, o)} />
                    <span className="text-sm xl:text-base font-medium text-gray-700">{o}</span>
                </motion.label>
            ))}
        </div>
    );

    if (q.type === 'multiselect') {
        const sel = Array.isArray(value) ? value : [];
        return (
            <div className="grid gap-2 xl:gap-2.5">
                {q.options.map(o => {
                    const checked = sel.includes(o);
                    return (
                        <motion.label key={o} whileHover={{ scale: 1.005 }}
                            className={`flex items-center gap-3 p-3 xl:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                ${checked ? 'border-orange-400 bg-orange-50 shadow-sm' : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/30'}`}>
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all
                                ${checked ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}>
                                {checked && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-3 h-3 text-white" /></motion.div>}
                            </div>
                            <input type="checkbox" className="hidden" checked={checked}
                                onChange={() => onChange(q.id, checked ? sel.filter(x => x !== o) : [...sel, o])} />
                            <span className="text-sm xl:text-base font-medium text-gray-700">{o}</span>
                        </motion.label>
                    );
                })}
            </div>
        );
    }

    if (q.type === 'number') return (
        <div className="relative">
            <input type="number" min={q.min || 0} value={value || ''} placeholder={q.placeholder}
                onChange={e => onChange(q.id, e.target.value)}
                className="w-full px-4 py-3.5 xl:py-4 pr-24 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-semibold text-lg xl:text-xl focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all" />
            {q.unit && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs xl:text-sm font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-lg">{q.unit}</span>}
        </div>
    );

    return null;
}

function ResultsScreen({ answers, onRestart }) {
    const r = calculateROI(answers);
    const kpis = [
        { label: 'CBG Output', value: `${r.cbgTPD} TPD`, sub: `${r.cbgAnnual} T/yr`, Icon: Wind, accent: 'green' },
        { label: 'Annual Revenue', value: fmt(r.totalRevenue), sub: 'projected', Icon: TrendingUp, accent: 'orange' },
        { label: 'Annual EBITDA', value: fmt(r.ebitda), sub: 'net earnings', Icon: BarChart3, accent: 'green' },
        { label: 'Payback Period', value: `${r.paybackYears} yrs`, sub: 'estimated', Icon: Award, accent: 'orange' },
        { label: 'Net CAPEX', value: fmt(r.netCapex), sub: r.subsidyRate ? `${(r.subsidyRate * 100).toFixed(0)}% subsidy applied` : 'no subsidy', Icon: DollarSign, accent: 'green' },
        { label: '5-Year ROI', value: `${r.roi5yr}%`, sub: 'projected return', Icon: Zap, accent: 'orange' },
    ];
    const streams = [
        { label: 'CBG Sales', value: r.cbgRevenue, color: '#16a34a' },
        { label: 'Digestate', value: r.digestateRevenue, color: '#86efac' },
        { label: 'CO₂ Sales', value: r.co2Revenue, color: '#f97316' },
        { label: 'Carbon Credits', value: r.carbonCreditRevenue, color: '#fdba74' },
    ].filter(x => x.value > 0);
    const totalRev = streams.reduce((s, x) => s + x.value, 0) || 1;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5 xl:space-y-6">
            {/* Header */}
            <div className="text-center pb-1">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs xl:text-sm font-bold mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> AI Analysis Complete
                </motion.div>
                <h2 className="text-2xl xl:text-3xl font-bold text-gray-800">
                    Your <span className="text-green-600">CBG Plant</span> <span className="text-orange-500">ROI Report</span>
                </h2>
                <p className="text-gray-400 text-xs xl:text-sm mt-1">Conservative industry estimates based on your inputs</p>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-4">
                {kpis.map((k, i) => (
                    <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                        className={`p-4 xl:p-5 rounded-2xl border-2 ${k.accent === 'green' ? 'border-green-100 bg-gradient-to-br from-green-50 to-white' : 'border-orange-100 bg-gradient-to-br from-orange-50 to-white'}`}>
                        <div className={`w-9 h-9 xl:w-10 xl:h-10 rounded-xl flex items-center justify-center mb-2.5 ${k.accent === 'green' ? 'bg-green-600' : 'bg-orange-500'}`}>
                            <k.Icon className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                        </div>
                        <div className={`text-xl xl:text-2xl font-bold ${k.accent === 'green' ? 'text-green-700' : 'text-orange-600'}`}>{k.value}</div>
                        <div className="text-xs xl:text-sm font-semibold text-gray-600 mt-0.5">{k.label}</div>
                        <div className="text-[10px] xl:text-xs text-gray-400">{k.sub}</div>
                    </motion.div>
                ))}
            </div>

            {/* Revenue bars */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-5 xl:p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm xl:text-base">
                    <BarChart3 className="w-4 h-4 xl:w-5 xl:h-5 text-green-600" /> Revenue Breakdown
                </h3>
                <div className="space-y-3 xl:space-y-4">
                    {streams.map((rb, i) => (
                        <div key={rb.label}>
                            <div className="flex justify-between text-xs xl:text-sm mb-1.5">
                                <span className="font-semibold text-gray-700">{rb.label}</span>
                                <span className="font-bold text-gray-800">{fmt(rb.value)}</span>
                            </div>
                            <div className="h-2 xl:h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div className="h-full rounded-full" style={{ backgroundColor: rb.color }}
                                    initial={{ width: 0 }} animate={{ width: `${(rb.value / totalRev) * 100}%` }}
                                    transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cost vs Revenue */}
            <div className="grid sm:grid-cols-2 gap-3 xl:gap-4">
                <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-4 xl:p-5">
                    <div className="text-xs xl:text-sm font-bold text-green-700 mb-1 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> Annual Revenue
                    </div>
                    <div className="text-xl xl:text-2xl font-bold text-green-700 mb-3">{fmt(r.totalRevenue)}</div>
                    <div className="space-y-1">
                        {[
                            ['CBG Sales', r.cbgRevenue],
                            ['Digestate', r.digestateRevenue],
                            ...(r.co2Revenue > 0 ? [['CO₂', r.co2Revenue]] : []),
                            ...(r.carbonCreditRevenue > 0 ? [['Carbon Credits', r.carbonCreditRevenue]] : [])
                        ].map(([l, v]) => (
                            <div key={l} className="flex justify-between text-xs xl:text-sm text-gray-600">
                                <span>{l}</span><span className="font-semibold">{fmt(v)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 xl:p-5">
                    <div className="text-xs xl:text-sm font-bold text-orange-700 mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Annual Costs
                    </div>
                    <div className="text-xl xl:text-2xl font-bold text-orange-600 mb-3">{fmt(r.totalOpex)}</div>
                    <div className="space-y-1 text-xs xl:text-sm text-gray-600">
                        <div className="flex justify-between"><span>Operations & Maintenance</span><span className="font-semibold">{fmt(r.totalOpex - r.feedstockCostAnnual)}</span></div>
                        <div className="flex justify-between"><span>Feedstock Cost</span><span className="font-semibold">{fmt(r.feedstockCostAnnual)}</span></div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="flex gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3.5 xl:p-4">
                <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs xl:text-sm text-amber-700 leading-relaxed">
                    Projections are indicative estimates. Actual returns depend on local conditions, market prices, and operational efficiency. KEC will prepare a detailed bankable DPR after site assessment.
                </p>
            </div>

            <div className="bg-gradient-to-br from-[#0d4a28] to-[#1a6b3c] rounded-2xl p-6 xl:p-8 text-white text-center">
                <h3 className="text-lg xl:text-xl font-bold mb-1">Ready to build your CBG plant?</h3>
                <p className="text-green-200 text-sm xl:text-base mb-6">Get a detailed DPR, approvals assistance, and end-to-end EPC support from KEC.</p>

                {/* Talk to expert label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-white/20" />
                    <span className="text-green-300 text-xs xl:text-sm font-semibold tracking-widest uppercase">Talk to our Expert</span>
                    <div className="h-px w-12 bg-white/20" />
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                    <a href="tel:+918527626868"
                        className="inline-flex items-center justify-center gap-2.5 bg-white text-gray-800 font-bold px-6 xl:px-8 py-3.5 xl:py-4 rounded-xl transition-all hover:bg-green-50 shadow-lg shadow-black/20 text-sm xl:text-base group">
                        <span className="text-lg">📞</span>
                        <div className="text-left">
                            <div className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Call us now</div>
                            <div className="text-sm xl:text-base font-bold text-gray-800">+91 85276 26868</div>
                        </div>
                    </a>
                    <a href="https://wa.me/918287933634?text=Hello%20KEC%20Team,%20I%20completed%20the%20CBG%20ROI%20calculator%20and%20want%20a%20detailed%20DPR."
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20c05a] text-white font-bold px-6 xl:px-8 py-3.5 xl:py-4 rounded-xl transition-all shadow-lg shadow-green-900/30 text-sm xl:text-base">
                        <svg viewBox="0 0 32 32" fill="white" width="20" height="20"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.3 2 7.6L.4 31.6l8.2-2c2.2 1.2 4.7 1.8 7.4 1.8 8.6 0 15.6-7 15.6-15.6C31.6 7.4 24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.2 1.3-4.7-.3-.5C3.7 20.8 3 18.5 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 13-13 13zm7.1-9.7c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5-.1-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" /></svg>
                        <div className="text-left">
                            <div className="text-[10px] text-green-100 font-medium leading-none mb-0.5">Chat instantly</div>
                            <div className="text-sm xl:text-base font-bold">WhatsApp Us</div>
                        </div>
                    </a>
                </div>

                {/* Recalculate */}
                <button onClick={onRestart}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white font-medium px-5 py-2.5 rounded-xl transition-all border border-white/15 text-xs xl:text-sm">
                    <RotateCcw className="w-3.5 h-3.5" /> Recalculate
                </button>
            </div>
        </motion.div>
    );
}

export default function CbgRoiCalculator() {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [errors, setErrors] = useState({});
    const [done, setDone] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (!document.querySelector(`link[href="${POPPINS_URL}"]`)) {
            const l = document.createElement('link');
            l.rel = 'stylesheet'; l.href = POPPINS_URL;
            document.head.appendChild(l);
        }
    }, []);

    const currentStep = STEPS[step - 1];

    const handleChange = (id, value) => {
        setAnswers(p => ({ ...p, [id]: value }));
        setErrors(p => ({ ...p, [id]: false }));
    };

    const validate = () => {
        const e = {};
        currentStep.questions.forEach(q => {
            if (q.required) {
                const v = answers[q.id];
                if (!v || (Array.isArray(v) && v.length === 0) || v === '') e[q.id] = true;
            }
        });
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleNext = () => {
        if (!validate()) return;
        if (step === STEPS.length) {
            setDone(true);
            // scroll to top of card to see results
            setTimeout(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        } else {
            setStep(s => s + 1);
            cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleBack = () => { if (step > 1) setStep(s => s - 1); };
    const handleRestart = () => {
        setStep(1); setAnswers({}); setErrors({}); setDone(false);
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div style={{ fontFamily: "'Poppins','system-ui',sans-serif" }} className="min-h-screen bg-gray-50">

            {/* ── HERO ── */}
            <div className="relative bg-[#0d4a28] overflow-hidden">
                <Particles />

                {/* Grid texture */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />

                {/* Glow blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

                <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-6 xl:px-12 py-14 xl:py-20 text-center">

                    {/* ── FIX 1: Logo with correct path + proper sizing ── */}
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-10 xl:h-12 w-auto rounded-xl overflow-hidden flex items-center justify-center">
                            <img
                                src="/images/kec-logo.png"
                                alt="KEC Biofuel Logo"
                                className="h-full w-auto object-contain"
                                onError={(e) => {
                                    // fallback to leaf icon if logo missing
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback icon — hidden by default, shown if image fails */}
                            <div className="w-10 h-10 xl:w-12 xl:h-12 bg-white/10 backdrop-blur rounded-xl items-center justify-center border border-white/20" style={{ display: 'none' }}>
                                <Leaf className="w-5 h-5 xl:w-6 xl:h-6 text-green-300" />
                            </div>
                        </div>
                        <span className="text-white font-bold text-xl xl:text-2xl tracking-wide">
                            KEC <span className="text-green-300">Biofuel</span>
                        </span>
                    </motion.div>

                    {/* AI badge */}
                    <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold mb-6 tracking-widest uppercase">
                        <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4" /> ✦ AI-Powered Tool
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                        className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.12] mb-5 w-[600px] justify-center mx-auto">
                        Smart ROI  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-200 to-emerald-300">
                            Analyzer
                        </span>

                        {' '}for Clean Energy
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                        className="text-green-100/75 text-base xl:text-lg 2xl:text-xl max-w-lg xl:max-w-2xl mx-auto leading-relaxed mb-10">
                        Get an AI-generated investment forecast for your biofuel or CBG plant in under 60 seconds.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        className="flex flex-wrap justify-center gap-8 xl:gap-16">
                        {[['100+', 'Plants Built'], ['₹500Cr+', 'Investments Facilitated'], ['30%', 'NABARD Subsidy'], ['95%', 'Plant Uptime']].map(([n, l]) => (
                            <div key={l} className="text-center">
                                <div className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-orange-400">{n}</div>
                                <div className="text-xs xl:text-sm text-green-200/60 font-medium mt-0.5">{l}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── FORM CARD ── FIX 2: mt-8 so it doesn't overlap hero ── */}
            <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 xl:px-8 mt-8 xl:mt-12 pb-16 xl:pb-24" ref={cardRef}>
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden border border-gray-100">

                    {/* Card header with step nav */}
                    {!done && (
                        <div className="px-6 xl:px-8 pt-6 xl:pt-7 pb-0 border-b border-gray-100">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h2 className="text-base xl:text-lg font-bold text-gray-800">Enter Your Project Details</h2>
                                    <p className="text-xs xl:text-sm text-gray-400 mt-0.5">All fields help our AI generate a more accurate estimate.</p>
                                </div>
                                <span className="text-xs xl:text-sm font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full flex-shrink-0 ml-4">
                                    Step {step}/{STEPS.length}
                                </span>
                            </div>
                            <StepNav current={step} />
                        </div>
                    )}

                    <div className="p-6 xl:p-8 2xl:p-10">
                        <AnimatePresence mode="wait">
                            {done ? (
                                <ResultsScreen key="results" answers={answers} onRestart={handleRestart} />
                            ) : (
                                <motion.div key={step}
                                    initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -48 }}
                                    transition={{ duration: 0.26, ease: 'easeInOut' }}>

                                    {/* Step section label */}
                                    <div className="mb-6 xl:mb-7">
                                        <div className={`inline-flex items-center gap-1.5 text-[10px] xl:text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-3
                                            ${currentStep.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                            <currentStep.icon className="w-3 h-3" />
                                            {currentStep.title}
                                        </div>
                                        <h3 className="text-xl xl:text-2xl font-bold text-gray-800">{currentStep.subtitle}</h3>
                                    </div>

                                    {/* Questions */}
                                    <div className="space-y-6 xl:space-y-7">
                                        {currentStep.questions.map((q, qi) => (
                                            <motion.div key={q.id}
                                                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: qi * 0.07 }}>
                                                <label className="block text-sm xl:text-base font-semibold text-gray-700 mb-2">
                                                    <span className="mr-1.5">{q.icon}</span>{q.label}
                                                    {q.required && <span className="text-orange-500 ml-1">*</span>}
                                                </label>
                                                {q.hint && (
                                                    <div className="flex items-start gap-1.5 mb-2.5 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                                        <Info className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                                                        <p className="text-xs xl:text-sm text-green-700">{q.hint}</p>
                                                    </div>
                                                )}
                                                <QuestionField q={q} value={answers[q.id]} onChange={handleChange} />
                                                {errors[q.id] && (
                                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                        className="text-xs xl:text-sm text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                                                        <AlertCircle className="w-3.5 h-3.5" /> This field is required
                                                    </motion.p>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Nav buttons */}
                                    <div className="flex gap-3 mt-8 xl:mt-10 pt-6 border-t border-gray-100">
                                        {step > 1 && (
                                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleBack}
                                                className="flex items-center gap-2 px-5 xl:px-6 py-3 xl:py-3.5 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all text-sm xl:text-base">
                                                <ChevronLeft className="w-4 h-4" /> Back
                                            </motion.button>
                                        )}
                                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleNext}
                                            className="flex-1 flex items-center justify-center gap-2 font-bold py-3.5 xl:py-4 rounded-xl text-white text-sm xl:text-base transition-all
                                                bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 shadow-lg shadow-green-200">
                                            {step === STEPS.length ? (
                                                <><Sparkles className="w-4 h-4" /> Generate My ROI Report</>
                                            ) : (
                                                <>Continue <ChevronRight className="w-4 h-4" /></>
                                            )}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Trust strip */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-5 xl:gap-8 mt-6 xl:mt-8 text-xs xl:text-sm text-gray-500">
                    {['100+ Plants Built', 'SATAT Registered', 'NABARD Empanelled', 'EPC + O&M Guarantee'].map(t => (
                        <div key={t} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-green-500" />
                            <span className="font-medium">{t}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}