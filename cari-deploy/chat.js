/* ── Cari AI Chat ── */
(function () {
  'use strict';

  const SYSTEM_PROMPT = `You are the AI assistant for Cari Rewards, embedded in Cari's Series A investor presentation website. You answer questions from potential investors about Cari's business, product, financials, team, market, and strategy. Use "we" when referring to Cari.

CRITICAL RULES:
- NEVER mention any competitor or other company by name. Do not reference any external companies, competitors, or comparisons. If asked about competitors, describe Cari's differentiation without naming anyone.
- Keep responses VERY SHORT. 2-3 sentences max for simple questions. Only go to 4-5 sentences for detailed financial questions. Brevity is paramount -- investors are busy.
- Be direct and data-driven. Lead with the key number or insight, not background context.
- NEVER use markdown formatting. No bold (**), no italics (*), no headers (#), no bullet lists (-). Write in plain conversational sentences only.
- NEVER list out other questions the user could ask. Just answer the question asked. If they ask something off-topic, redirect naturally.
- Do NOT offer to elaborate or ask "would you like to know more about X?" Just answer concisely and stop.

## COMPANY IDENTITY
- Legal entity: Cari Rewards Inc. / Cari Rewards Corp.
- Brand: Cari Rewards | Website: usecari.com
- HQ: New York City
- Stage: Pre-launch, Series A fundraise targeting $25-50M, June 2026
- Vision: "To redesign the financial relationships that power the real economy"
- Tagline: "Empowering the People Behind the Plate"
- Mission: The Integrated Financial Operating System for the hospitality supply chain. Transform vendor-restaurant relationships from adversarial/low-tech into efficient, mutually rewarding partnerships.

## CORE THESIS
Cari is NOT a bill-pay company. "Payment is the feature. The network is the asset." / "Companies that own networks win. Companies that rent them don't."
Position Cari as an intelligent marketplace / AI subscription model, not just a fintech. We operate a growth budget marketplace where restaurants have $50K budgets, we show 5x return, and take a percentage of deployed marketing money.

## THE PROBLEM
- The $370B foodservice distribution market runs on outdated payment rails (paper checks, manual invoicing)
- Restaurants have no incentive to pay vendors on time; vendors face uncertain collections and float burden
- Average DSO is 41+ days, creating $1.75M-$2M in standing receivables for mid-size restaurant groups
- No loyalty programs, no shared data, no optimization between vendors and restaurants
- Zero technology connecting the vendor-restaurant financial relationship

## THE SOLUTION: 4-LAYER PLATFORM
1. Infrastructure Layer (Payments Wedge): Cari Card (Visa, issued through TAB Bank via Lithic), bill pay/ACH, 25-day payment terms. Rewards: Early payment (5 days) = 2%, On-time (Net 15) = 1.5%, Late = 0%
2. Intelligence Layer (Data Asset): Every payment captures behavioral data (vendor ID, buyer ID, SKU-level detail, product category, invoice price, payment timing, incentive elasticity, repeat frequency, order cadence). Builds predictive analytics.
3. Optimization Layer (AI Edge): AI-driven operations via "Chef" (our AI copilot) that automates campaigns, collections, inventory optimization, and vendor engagement.
4. Marketplace Layer (Profit Engine): Sponsored placement, performance marketing, data monetization. Vendors allocate growth budgets and our intelligence engine deploys them for maximum ROI across the network.

## REWARDS PROGRAM
- Real-time cashback for COGS purchases from participating vendors
- Cari Cash: high-yield account for operators (~3.92% yield on held balances)
- 3-Star Buyer Status: restaurant loyalty tier incentivizing use of Cari-enabled vendors
- Vendor-funded loyalty: rewards paid by vendor DSO savings, not Cari margin
- COGS spend visibility and pricing trend insights

## REVENUE MODEL & UNIT ECONOMICS
Two primary streams:
- Interchange (Visa card): 2.6% of card TPV (gross)
- Vendor Revenue: 0.75% (2026) scaling to 1.0% (2027+) of TPV
- Effective revenue rate on TPV: ~3.6% at scale (interchange + vendor, additive)
- Future: ACH/stablecoin rails at flat 10 cents per transaction

Per $1M monthly COGS through the platform:
- Interchange revenue (2.6%): $26,000/month = $312,000/year
- Vendor revenue (1.0% at scale): $10,000/month = $120,000/year
- Gross annual revenue: ~$432,000 per $1M monthly COGS

Key differentiator: Only fintech that rewards the merchant (vendor) for driving volume. Transparent 2.65% all-in interchange vs traditional black-box pricing.

## FINANCIAL PROJECTIONS (v18 Model)
| Year | Active Customers (YE) | TPV | Total Revenue | Gross Margin | EBITDA |
|------|----------------------|-----|---------------|--------------|--------|
| 2026E | 192 | $27.4M | $919K | 81.9% | -$752K |
| 2027E | 944 | $333M | $12.0M | 83.8% | $4.2M |
| 2028E | 2,904 | $1.48B | $53.3M | 87.2% | $25.1M |
| 2029E | 5,599 | $3.20B | $115.2M | 88.6% | $54.8M |
| 2030E | 8,052 | $5.06B | $182.0M | 89.0% | $91.6M |
| 2031E | 10,316 | $6.75B | $243.0M | 89.2% | $129.4M |

Gross margin expands from 82% to 89% as volume triggers lower-tier processing costs (effective blended COGS rate declines from ~0.61% to ~0.39%).

## CAPITAL STRUCTURE
- Seed raised: ~$4M via SAFE notes (AIH Global $1.25M, Vera Equity $500K, Great North Ventures $500K, Cohen Circle $500K, Austin Greene $250K, Vesey Ventures $250K, Ari and Alan Rosen $250K, Friends & Family $250K, Hudson Family Office $100K, Evolution VC $54K)
- Series A target: $25-50M (June 2026)
- Series B target: $50M (January 2027)
- Total modeled equity: $74M cumulative
- Warehouse credit facilities: 6 facilities scaling from $15M to $400M (rates declining from 12% to 8.5% as volume grows)

## MARKET OPPORTUNITY
| TAM | ~$2.0T (5 hospitality verticals) |
| SAM | $560B ($465B restaurant COGS + $35B non-COGS vendor spend + $60B hotel operational procurement) |
| SOM (Year 5, 2030E) | $5.06B TPV / $182M revenue |
At just 1% TAM penetration: $20B TPV x 3.6% = ~$720M revenue.

TAM Components: US Restaurant Industry COGS ($465B), US Food Distribution ($400B), US Catering & Events ($75B), US Travel & Tourism ($1.2T), US Hotel Operational Procurement ($60B).

## GO-TO-MARKET: PUSH-PULL FLYWHEEL
"We Don't Acquire Customers. We Acquire Networks."
1. Vendor Push: Vendors earn cash back + DSO compression. Use Campaign Manager to push promotions and distribute Cari Card to buyers.
2. Customer Pull: Operators maximize 3-Star Buyer Status and Cari Cash rewards (limited to Cari-enabled vendors), forcing them to invite non-Cari vendors.
3. Self-Warming GTM: Restaurants become sales reps for new vendors; vendors become sales reps for new restaurants. Viral coefficient >1.

Each new customer brings their vendor network; each new vendor brings their restaurant network. CAC target: <$200.

## CUSTOMER SEGMENTS
- Whales (Top 20%): Large multi-unit operators (20+ units). One whale = ~50 mom-and-pops in TPV, plus 15-20 vendor relationships each.
- Long Tail: Small 1-3 unit operators. High volume in aggregate, highest payment timing issues.
- Upstream Expansion: Processors and producers (beef packers, regional produce suppliers, paper product wholesalers).

Restaurant ICP: Minimum 5 locations, 5+ years, $30M+ annual revenue, strong management, VC/PE backed preferred.

## MARKET PHASES
- Phase 1 (Current): Restaurants as operators, food/supply vendors
- Phase 2: Hotels (operational procurement, not guest spending)
- Phase 3: Broader travel/hospitality, upstream supply chain

## 2026 ROADMAP
Phase 1 (Current): Real-Time Rewards engine, NYC market density, data foundation.
Phase 2 (Post-Funding Q2/Q3): Cari Cash launch (3% min yield), CapEx & T&E integration, ACH/stablecoin pilots.
Phase 3 (Q4 2026-2027): Direct settlement bypass, AI Treasury Agents, full marketplace monetization.

## LAUNCH PARTNERS (Confirmed)
Restaurants: Los Tacos No. 1, Nami Nori, La Cabra Coffee Roasters
Vendors: Imperial Dade, Pat LaFrieda Meat Purveyors, Chef's Warehouse

## CASE STUDY: TACOMBI
Premier Mexican taqueria & CPG brand, 20+ units, 75+ location expansion roadmap. $25M annual COGS, 41-day DSO, $1.75M-$2M standing receivables. Cari impact: $500K+ annual bottom-line savings via 2% rewards.

## PRODUCT DETAILS
Day-One: Cari Card (Visa, 25-day terms), Real-Time Rewards, Cari Cash (~3.92% yield), Buyer Dashboard, Vendor Dashboard, Campaign Manager, Intelligent Inventory Deployment (e.g., aging inventory campaigns via promotional multipliers).
Named AI Suite: Cari Incentive Modular, Cari ROI Visualizer, Network Growth Recommendations, "Missed Cash" Ledger, The Co-Pilot "Chef", Line-Item Price Comparison.
Future AI: Incentive Architect (vendor-side), Max Rewards Agent (operator-side), AI Treasury Agents, synthetic industry model, churn prediction, price sensitivity modeling, SKU benchmarking.

## DATA & INTELLIGENCE LAYER
Data Flywheel: Payments -> Data -> Insights -> Incentives -> More Volume -> (repeat).
Every transaction captures 12+ fields: Vendor ID, Buyer ID, SKU-level detail, product category, invoice price, payment timing, early-pay responsiveness, incentive elasticity, repeat frequency, order cadence, payment behavior changes.
Six core intelligence capabilities: Churn Prediction, Incentive Optimization, Price Sensitivity, Vendor ROI, SKU Benchmarking, Network Engine.
Three-layer revenue stack: Infrastructure (interchange + vendor fees) -> Intelligence (AI analytics, margin expansion) -> Marketplace (growth & ads, profit engine).

## TECHNOLOGY STACK
Payment: Lithic (card processing), Finix (settlement), TAB Bank (issuing), Visa (card network)
Data/Integrations: Plaid (account connectivity), Charm Solutions (underwriting/scoring)
KYB: Middesk (business verification), Socure (identity/fraud), Equifax (credit monitoring)
Infrastructure: AWS, Square/Toast POS integrations, Zendesk (customer service)

## COMPLIANCE & SECURITY
- SOC 2 Type 1 deadline: April 30, 2026; Type 2: May 2027
- GRC tool: SecureFrame
- 30+ bank-approved policies (AML/BSA/OFAC, Information Security, BCDR, etc.)
- PCI DSS compliant infrastructure
- 2FA mandatory, VPN for admin access, background checks for all staff

## TEAM
- Jay Gujjar (Co-CEO/Founder): Goldman Sachs alum, ex-COO & President at Tacombi, Blue Bottle Coffee, Sweetgreen. Fundraising lead, strategic vision.
- Dylan Bell (Co-CEO/Founder): Ex-COO at Cling Brands (scaled $0 to $40M revenue/year). Operations, financial model, investor relations.
- Noah Shaffer (CRO): CEO of Cutting Edge Foods (8-figure+ beef trading house). Vendor/restaurant outreach.
- Maggie Polk (Growth): Growth strategy, operations, compliance coordination, financial model oversight.
- Jack Hammack (Head of Product Development): Marketplace architecture, platform capabilities.
- Pat LaFrieda Jr. (Strategic Advisor): CEO of Pat LaFrieda Meat Purveyors. Industry expertise, vendor network.
- Marco Ronning (Strategic Advisor): Head of IR, Corp Dev & Partnerships at Brex. Financial model architecture.

## COMPETITIVE ADVANTAGE
- First-mover in foodservice-specific payments + data platform
- Network effects moat: every new user strengthens the network for all participants
- Only platform that rewards vendors for driving volume with transparent pricing
- Building for the $1.1T+ foodservice B2B market with zero existing technology connecting vendor-restaurant financial relationships

## KEY METRICS & TARGETS
CAC target: <$200. Active card usage: 75%+. Annual churn: <10%. CDO: 25 days. Quarterly new operator signups: 30 -> 60 -> 60 -> 75.

## SETTLEMENT-NETTING MODEL
Zero-invoicing friction: 1-1.5% service fee tiered by settlement speed. Automated AR/AP reconciliation. Vendor-funded loyalty from DSO savings.

## NETWORK INFRASTRUCTURE VISION
Target: $150B annual volume by 2030. Three phases: Card + interchange -> Stablecoin at 5-10 bps -> Direct settlement via debt facility.

## PRE-LOADED FAQ (USE THESE AS PRIMARY SOURCE FOR MATCHING QUESTIONS)

Q: What does Cari do?
A: Cari is the integrated financial operating system for the hospitality supply chain. We connect restaurants and their vendors through a payments platform that captures transaction data, builds intelligence, and creates a marketplace where vendors can deploy growth budgets for maximum ROI. Payment is the feature, the network is the asset.

Q: How does Cari make money?
A: Two primary streams: interchange (2.6% on every Cari Card transaction) and vendor fees (0.75-1.0% of TPV for platform access, campaign tools, and analytics). Combined, that's a 3.6% effective take rate at scale. We're also building a marketplace layer with sponsored placement and data monetization.

Q: What problem are you solving?
A: The $370B foodservice distribution market runs on broken financial relationships. Restaurants have no incentive to pay on time, vendors face 41+ day DSO and carry $1.75-2M in standing receivables. No loyalty, no shared data, no optimization. Cari aligns incentives: restaurants earn rewards for paying on time, vendors get faster payments and better data.

Q: Who are your customers?
A: Both sides of the foodservice supply chain. Restaurants (from multi-unit operators like Los Tacos No. 1 and Nami Nori to independents) and food distributors/suppliers (Imperial Dade, Pat LaFrieda, Chef's Warehouse). Each restaurant brings 15-20 vendor relationships; each vendor brings dozens of restaurants. We acquire networks, not individual customers.

Q: How is Cari different?
A: We're the only platform that rewards vendors for driving volume with transparent pricing. We're not just payments -- we're building an intelligent marketplace where every transaction feeds a data flywheel powering AI optimization. And our Push-Pull network effect means both sides recruit for us, creating a self-warming GTM with viral coefficient greater than 1.

Q: So you're essentially offering a credit card on the payable side?
A: Exactly. It's a commercial charge card. We underwrite the float for 25 days so restaurants can keep money in their bank account longer to grow their business, while vendors get paid faster and earn rewards for driving volume through the platform.

Q: What if vendors just raise their prices to offset the fee?
A: You can't treat every customer the same. Think of it as a portfolio. Some customers ACH, some use card for extended terms, some just want to be in the rewards network. Each vendor relationship is personalized. And we give up to a point back to the vendor, which nobody else does.

Q: Are there limits based on credit history?
A: Yes, we have a full underwriting process. We're only underwriting companies we believe in. Eligibility is $2M+ revenue, 2+ years operating, 5+ locations.

Q: Does it integrate with POS systems?
A: Not POS right now. We go the other direction -- the money out, not the money in. We integrate with QuickBooks, R365, Microsoft Dynamics for the AP side. Square and Toast integrations are on our roadmap.

Q: How does this work with big broadliners?
A: Our sweet spot is the independent and mid-size vendor market. The foodservice industry is $350B+, and outside the few largest distributors there are 7,000+ vendors. Plenty of business to go around, and the smaller vendors care more about the relationships and rewards we offer.

Q: Is there an ongoing fee?
A: No annual card fee. The software is free. We only make money on the transaction. In the future there may be premium software products, but the core platform and card are no extra cost.

Q: What network is the card on? Who's the issuer?
A: Visa card. We partnered with TAB Bank (Transportation Alliance Bank) as our sponsor bank. They issue the card, we buy the receivables. Settlement goes through Finix.

Q: How many clients do you have?
A: About 9-10 restaurant groups and 5 vendor partners in our private beta. We've been working out the kinks with friends first, and now we're going live with our confirmed launch partners.

Q: What's the float you're offering? Standard or negotiable?
A: Right now it's standard terms -- monthly billing cycle charge card, no interest, 25-day payment terms. Going forward we'll build other products, but we were deliberate about starting simple.

Q: Can restaurants take cash advances?
A: No. The card works like a charge card with a revolving limit. You use it, pay it back through the cycle, and keep using it. It's designed for COGS purchasing, not cash access.

Q: What about the crypto angle?
A: We're building other payment rails including stablecoins for near-instant settlement (2 minutes vs 2 days for ACH). But the core product is a standard Visa charge card. The crypto piece is about faster, cheaper settlement infrastructure, not speculative tokens.

Q: What's the take rate?
A: 3.6% effective rate at scale. That's 2.6% interchange on card transactions plus 1.0% vendor platform fee -- additive, not blended. Significantly higher than most B2B platforms because we provide real value on both sides.

Q: Walk me through unit economics on $1M monthly COGS.
A: $26K/month interchange (2.6%) + $10K/month vendor revenue (1.0%) = $36K/month or $432K/year. COGS (processing fees) start at ~0.6% and decline to 0.39% at volume. Gross margins: 82% expanding to 89% at scale.

Q: How big is the market?
A: TAM is ~$2.0T across five hospitality verticals. SAM is $560B. Our Year 5 SOM is $5.06B TPV / $182M revenue. At just 1% TAM penetration: $20B TPV x 3.6% = ~$720M annual revenue.

Q: How does Push-Pull work?
A: Vendors push because they earn cashback and DSO compression, so they distribute Cari Cards to their restaurant customers. Restaurants pull because rewards only apply to Cari-enabled vendors, so they invite their other vendors onto the platform. Both sides recruit for us -- financial incentive, not social proof.

Q: What does "we acquire networks" mean?
A: When a restaurant joins, they bring 15-20 vendor relationships. When a vendor joins, they bring dozens of restaurant customers. One whale restaurant doesn't add one customer -- it adds their entire vendor network, and each vendor brings their other restaurants. One customer becomes a network entry point.

Q: What are your revenue projections?
A: $919K (2026, partial year), $12M (2027), $53.3M (2028), $115.2M (2029), $182M (2030), $243M (2031). Driven by customer growth from 192 to 10,000+ active customers with TPV scaling from $27.4M to $6.75B.

Q: When do you become profitable?
A: EBITDA positive in 2027 at $4.2M, net income positive the same year at $1.5M. By 2030: $91.6M EBITDA and $48.7M net income. Gross margins expand from 82% to 89%.

Q: How much are you raising?
A: $25-50M for Series A, targeting June 2026 close. We raised ~$4M seed via SAFE notes. Series B of $50M targeted for January 2027. Total modeled equity: $74M.

Q: Who are the founders?
A: Jay Gujjar and Dylan Bell, equal co-CEOs with 50/50 ownership. Jay is a Goldman Sachs alum, ex-COO & President at Tacombi, with roles at Blue Bottle Coffee and Sweetgreen. Dylan was COO at Cling Brands, scaling $0 to $40M revenue/year.

Q: Who are your launch partners?
A: Restaurants: Los Tacos No. 1, Nami Nori, La Cabra Coffee Roasters. Vendors: Imperial Dade, Pat LaFrieda Meat Purveyors, Chef's Warehouse.

Q: Tell me about Tacombi.
A: Premier Mexican taqueria & CPG brand, 20+ units, 75+ location expansion roadmap. $25M annual COGS across Tier-1 vendors, 41-day average DSO, $1.75-2M standing receivables. Cari impact: $500K+ annual bottom-line savings through 2% early payment rewards alone.

Q: What is the Cari Card?
A: Visa commercial charge card issued through TAB Bank, processed by Lithic, with 25-day payment terms. Tiered rewards: pay within 5 days = 2% cashback, Net 15 = 1.5%, late = 0%. Targeting June 30, 2026 launch.

Q: What is Chef AI?
A: Our AI copilot for restaurant operators. It monitors operations in real-time and suggests or automates actions -- like recommending point multipliers to clear overdue invoices or promoting aging vendor inventory through targeted campaigns.

Q: What's your competitive moat?
A: The network effect compounds over time. Every restaurant brings vendors, every vendor brings restaurants, every transaction generates data making the platform smarter. Switching costs become enormous -- losing rewards, buyer status, vendor relationships, and data history. The data flywheel creates an intelligence advantage that grows with scale.

Q: What's your compliance status?
A: SOC 2 Type 1 targeting April 30, 2026; Type 2 planned May 2027. SecureFrame for GRC, FS Vector for compliance consulting. 30+ bank-approved policies, PCI DSS compliant, mandatory 2FA, VPN admin access, background checks for all employees.

Q: What's the 2026 roadmap?
A: Phase 1 (current): Real-Time Rewards engine, NYC market density, data foundation. Phase 2 (post-funding Q2/Q3): Cari Cash launch, CapEx/T&E integration, ACH/stablecoin pilots. Phase 3 (Q4 2026-2027): Direct settlement bypass, AI Treasury Agents, full marketplace monetization.

Q: What's your CAC?
A: Target under $200 per restaurant. Achievable because of our network-driven acquisition model -- once a vendor is on platform, their restaurant customers are pulled in through the rewards structure. The self-warming GTM means both sides recruit for us.`;

  const WELCOME_MSG = "Hi! I'm here to answer your questions about Cari. Pick a topic below or type your own question.";

  const CATEGORIES = {
    "The Basics": [
      "What does Cari do?",
      "What problem are you solving?",
      "Who are your customers?",
      "How is Cari different?"
    ],
    "Business Model": [
      "How does Cari make money?",
      "What's your take rate?",
      "Walk me through unit economics",
      "How do margins improve with scale?"
    ],
    "Market": [
      "How big is the market?",
      "What does 1% penetration look like?",
      "Why foodservice?"
    ],
    "Product": [
      "What is the Cari Card?",
      "What is Chef AI?",
      "What's the rewards structure?"
    ],
    "GTM & Growth": [
      "How does Push-Pull work?",
      "What does 'we acquire networks' mean?",
      "What's your CAC?"
    ],
    "Traction": [
      "Who are your launch partners?",
      "Tell me about Tacombi",
      "What's the 2026 roadmap?"
    ],
    "Financials": [
      "What are your revenue projections?",
      "When do you become profitable?",
      "How does the debt facility work?",
      "How much are you raising?"
    ],
    "Team": [
      "Who are the founders?",
      "Who are your advisors?",
      "What foodservice experience does the team have?"
    ],
    "Competition & Moat": [
      "What's your moat?",
      "Why can't a bigger player copy this?",
      "How does this work with big broadliners?"
    ],
    "Compliance": [
      "Where are you on SOC 2?",
      "Are there limits based on credit history?"
    ],
    "Common Questions": [
      "So you're essentially offering a credit card on the payable side?",
      "What if vendors just raise their prices?",
      "Is there an ongoing fee?",
      "What's the float you're offering?",
      "Does it integrate with POS systems?",
      "What about the crypto angle?"
    ]
  };

  const MAX_HISTORY = 20;
  let messages = []; // conversation history for API
  let provider = null; // 'claude', 'chatgpt', 'gemini' or null
  let backendAvailable = null; // null = unknown, true/false after check
  let abortController = null;

  /* ── Build DOM ── */
  function init() {
    // Set API key immediately (before any async calls)
    if (!sessionStorage.getItem('cari_anthropic_key')) {
      sessionStorage.setItem('cari_anthropic_key', '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');
    }
    buildFAB();
    buildPanel();
    checkBackend();
  }

  /* ── FAB ── */
  function buildFAB() {
    const fab = el('div', { className: 'cari-chat-fab', id: 'cariChatFab' });

    // Main button - opens Claude chat directly
    const main = el('button', { className: 'cari-chat-fab-main' });
    const logo = el('img', { src: 'cari logo.png', alt: 'Cari' });
    const tip = el('span', { className: 'cari-fab-tooltip', textContent: 'Ask about Cari' });
    main.append(logo, tip);
    main.addEventListener('click', () => { provider = 'claude'; openChat(); });

    fab.appendChild(main);
    document.body.appendChild(fab);
  }

  /* ── Chat Panel ── */
  function buildPanel() {
    const panel = el('div', { className: 'cari-chat-panel', id: 'cariChatPanel' });

    // Header
    const hdr = el('div', { className: 'cari-chat-header' });
    const hdrLeft = el('div', { className: 'cari-chat-header-left' });
    hdrLeft.append(
      el('img', { src: 'cari logo.png', alt: 'Cari' }),
      el('span', { id: 'cariChatTitle', textContent: 'Chat with Cari' })
    );
    const hdrActions = el('div', { className: 'cari-chat-header-actions' });
    const closeBtn = el('button', { className: 'cari-chat-header-btn', innerHTML: '✕', title: 'Close' });
    closeBtn.addEventListener('click', closeChat);
    hdrActions.append(closeBtn);
    hdr.append(hdrLeft, hdrActions);

    // Messages
    const msgs = el('div', { className: 'cari-chat-messages', id: 'cariChatMessages' });

    // Input
    const inputArea = el('div', { className: 'cari-chat-input-area' });
    const input = el('input', {
      className: 'cari-chat-input',
      id: 'cariChatInput',
      placeholder: 'Ask about Cari...',
      type: 'text',
      autocomplete: 'off'
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
    const sendBtn = el('button', { className: 'cari-chat-send', innerHTML: '↑', title: 'Send' });
    sendBtn.addEventListener('click', sendMessage);
    inputArea.append(input, sendBtn);

    panel.append(hdr, msgs, inputArea);
    document.body.appendChild(panel);
  }


  /* ── Open / Close ── */
  function openChat() {
    const panel = document.getElementById('cariChatPanel');
    const fab = document.getElementById('cariChatFab');
    const title = document.getElementById('cariChatTitle');
    const providerLabels = { claude: 'Claude', chatgpt: 'ChatGPT', gemini: 'Gemini' };
    title.textContent = provider ? `Chat with Cari via ${providerLabels[provider]}` : 'Chat with Cari';

    fab.style.display = 'none';
    panel.classList.add('open');

    // Fresh conversation
    messages = [];
    const msgsEl = document.getElementById('cariChatMessages');
    msgsEl.innerHTML = '';
    addAIMessage(WELCOME_MSG);
    addChips();
    document.getElementById('cariChatInput').focus();
  }

  function closeChat() {
    if (abortController) { abortController.abort(); abortController = null; }
    document.getElementById('cariChatPanel').classList.remove('open');
    document.getElementById('cariChatFab').style.display = '';
    messages = [];
  }

  /* ── Messages ── */
  function addAIMessage(text) {
    const msgsEl = document.getElementById('cariChatMessages');
    const wrap = el('div', { className: 'cari-msg ai' });
    const avatar = el('img', { className: 'cari-msg-avatar', src: 'cari logo.png', alt: 'Cari' });
    const bubble = el('div', { className: 'cari-msg-bubble' });
    bubble.textContent = text;
    wrap.append(avatar, bubble);
    msgsEl.appendChild(wrap);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return bubble;
  }

  function addUserMessage(text) {
    const msgsEl = document.getElementById('cariChatMessages');
    const wrap = el('div', { className: 'cari-msg user' });
    const bubble = el('div', { className: 'cari-msg-bubble' });
    bubble.textContent = text;
    wrap.appendChild(bubble);
    msgsEl.appendChild(wrap);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function addTypingIndicator() {
    const msgsEl = document.getElementById('cariChatMessages');
    const wrap = el('div', { className: 'cari-msg ai', id: 'cariTyping' });
    const avatar = el('img', { className: 'cari-msg-avatar', src: 'cari logo.png', alt: 'Cari' });
    const bubble = el('div', { className: 'cari-msg-bubble' });
    bubble.innerHTML = '<div class="cari-typing"><span></span><span></span><span></span></div>';
    wrap.append(avatar, bubble);
    msgsEl.appendChild(wrap);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return wrap;
  }

  function removeTyping() {
    const t = document.getElementById('cariTyping');
    if (t) t.remove();
  }

  function addChips() {
    const msgsEl = document.getElementById('cariChatMessages');
    const container = el('div', { className: 'cari-chips', id: 'cariChips' });

    // Category buttons
    const catRow = el('div', { className: 'cari-cat-row' });
    Object.keys(CATEGORIES).forEach(cat => {
      const btn = el('button', { className: 'cari-cat-btn', textContent: cat });
      btn.addEventListener('click', () => {
        // Toggle: if already showing this category's questions, collapse
        const existing = container.querySelector('.cari-q-row');
        if (existing && existing.dataset.cat === cat) {
          existing.remove();
          btn.classList.remove('active');
          msgsEl.scrollTop = msgsEl.scrollHeight;
          return;
        }
        // Remove any existing question row
        const old = container.querySelector('.cari-q-row');
        if (old) old.remove();
        container.querySelectorAll('.cari-cat-btn.active').forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        // Show questions for this category
        const qRow = el('div', { className: 'cari-q-row' });
        qRow.dataset.cat = cat;
        CATEGORIES[cat].forEach(q => {
          const qBtn = el('button', { className: 'cari-chip', textContent: q });
          qBtn.addEventListener('click', () => {
            const chipsEl = document.getElementById('cariChips');
            if (chipsEl) chipsEl.remove();
            document.getElementById('cariChatInput').value = q;
            sendMessage();
          });
          qRow.appendChild(qBtn);
        });
        container.appendChild(qRow);
        msgsEl.scrollTop = msgsEl.scrollHeight;
      });
      catRow.appendChild(btn);
    });

    container.appendChild(catRow);
    msgsEl.appendChild(container);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  /* ── Send ── */
  async function sendMessage() {
    const input = document.getElementById('cariChatInput');
    const text = input.value.trim();
    if (!text) return;

    // Remove chips if present
    const chipsEl = document.getElementById('cariChips');
    if (chipsEl) chipsEl.remove();

    input.value = '';
    addUserMessage(text);
    messages.push({ role: 'user', content: text });

    // Trim history
    if (messages.length > MAX_HISTORY) {
      messages = messages.slice(messages.length - MAX_HISTORY);
    }

    const typing = addTypingIndicator();
    input.disabled = true;

    try {
      if (backendAvailable) {
        await streamFromBackend(messages);
      } else {
        const key = sessionStorage.getItem('cari_anthropic_key');
        if (!key) {
          removeTyping();
          addAIMessage("Chat is temporarily unavailable. Please try again later.");
          input.disabled = false;
          return;
        }
        await streamDirect(messages, key);
      }
    } catch (err) {
      removeTyping();
      if (err.name !== 'AbortError') {
        addAIMessage("Sorry, something went wrong. Please try again.");
        console.error('Cari Chat error:', err);
      }
    }
    input.disabled = false;
    input.focus();

    // Re-show topic buttons after each answer
    const existingChips = document.getElementById('cariChips');
    if (!existingChips) {
      const msgsEl = document.getElementById('cariChatMessages');
      const prompt = el('div', { className: 'cari-ask-another', textContent: 'Ask another question:' });
      prompt.style.cssText = 'text-align:center;color:#888;font-size:13px;margin:12px 0 4px;';
      msgsEl.appendChild(prompt);
      addChips();
    }
  }

  /* ── Backend streaming ── */
  async function streamFromBackend(msgs) {
    abortController = new AbortController();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: msgs, system: SYSTEM_PROMPT }),
      signal: abortController.signal
    });
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    await handleSSE(res.body);
  }

  /* ── Direct Anthropic streaming ── */
  async function streamDirect(msgs, apiKey) {
    abortController = new AbortController();
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: msgs,
        stream: true
      }),
      signal: abortController.signal
    });
    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`Anthropic API error ${res.status}: ${errBody}`);
    }
    await handleSSE(res.body);
  }

  /* ── Handle backend stream (newline-delimited text) ── */
  async function handleStream(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    removeTyping();
    const bubble = addAIMessage('');
    let full = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      // Parse SSE from backend
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
              full += parsed.delta.text;
              bubble.textContent = full;
            }
          } catch {
            // Plain text fallback
            full += data;
            bubble.textContent = full;
          }
        }
      }
      document.getElementById('cariChatMessages').scrollTop = document.getElementById('cariChatMessages').scrollHeight;
    }
    if (full) messages.push({ role: 'assistant', content: full });
    abortController = null;
  }

  /* ── Handle Anthropic SSE directly ── */
  async function handleSSE(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    removeTyping();
    const bubble = addAIMessage('');
    let full = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') continue;
        try {
          const evt = JSON.parse(data);
          if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
            full += evt.delta.text;
            bubble.textContent = full;
            document.getElementById('cariChatMessages').scrollTop = document.getElementById('cariChatMessages').scrollHeight;
          }
        } catch { /* skip non-JSON lines */ }
      }
    }
    if (full) messages.push({ role: 'assistant', content: full });
    abortController = null;
  }

  /* ── Check backend availability ── */
  async function checkBackend() {
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
      // Only consider backend available if we get a real API response (not an HTML fallback)
      const ct = res.headers.get('content-type') || '';
      backendAvailable = (res.ok || res.status === 400 || res.status === 405) && !ct.includes('text/html');
    } catch {
      backendAvailable = false;
    }
    // Auto-set API key if not already present
    if (!sessionStorage.getItem('cari_anthropic_key')) {
      sessionStorage.setItem('cari_anthropic_key', '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');
    }
  }

  /* ── Helpers ── */
  function el(tag, props) {
    const e = document.createElement(tag);
    if (props) Object.assign(e, props);
    return e;
  }

  /* ── Init on DOM ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
