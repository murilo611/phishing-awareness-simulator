const questions = [
  {
    type: 'email',
    senderName: 'Account Support',
    senderEmail: 'security-alert@example.net',
    subject: 'Action required: password reset request',
    date: 'Nov 4, 2026 · 9:14 AM',
    body: [
      'Hello,',
      'We received a request to reset the password for your account. If you did not make this request, your access may be restricted today.',
      'Please review your account activity as soon as possible to keep your account active.',
      'Thank you,\\nAccount Support Team'
    ],
    questionTitle: 'Is this email phishing or legitimate?',
    questionDescription: 'Look at the sender, message, and urgency before deciding.',
    answer: 'phishing',
    options: [
      { id: 'phishing', label: 'Phishing', detail: 'Suspicious or deceptive' },
      { id: 'legitimate', label: 'Legitimate', detail: 'Expected and trustworthy' }
    ],
    explanation: 'This message creates urgency around an unexpected password reset and comes from a generic, unfamiliar sender.',
    signals: ['Unfamiliar sender domain', 'Urgent account threat', 'Unsolicited request']
  },
  {
    type: 'quiz',
    subject: 'An unexpected password reset',
    body: [
      'You receive an unexpected message claiming your account will be disabled unless you act today. You were not trying to reset your password.',
      'What is the safest next step?'
    ],
    questionTitle: 'Choose the safest next step.',
    questionDescription: 'Pick the action that helps you verify without trusting the message.',
    answer: 'known-channel',
    options: [
      { id: 'known-channel', label: 'Contact IT through a known channel', detail: 'Use your company directory or help desk' },
      { id: 'reply', label: 'Reply and ask if it is real', detail: 'The sender may not be who they claim' },
      { id: 'act-fast', label: 'Follow the message immediately', detail: 'Urgency is not proof of legitimacy' },
      { id: 'share', label: 'Send your password to IT', detail: 'Legitimate support should never need it' }
    ],
    explanation: 'Verify account alerts independently. Use a known company contact or navigate to the official service yourself, rather than following an unexpected message.',
    signals: ['Verify independently', 'Do not share passwords', 'Avoid urgent message instructions']
  },
  {
    type: 'email',
    senderName: 'Parcel Delivery Desk',
    senderEmail: 'delivery-update@example.net',
    subject: 'Delivery could not be completed',
    date: 'Nov 3, 2026 · 2:37 PM',
    body: [
      'Hi there,',
      'Our fictional courier could not complete your delivery because the address details need attention. A small redelivery fee may apply.',
      'Please respond promptly to avoid your parcel being returned to the sender.',
      'Regards,\\nDelivery Desk'
    ],
    questionTitle: 'Is this email phishing or legitimate?',
    questionDescription: 'Look for unexpected requests and pressure to act.',
    answer: 'phishing',
    options: [
      { id: 'phishing', label: 'Phishing', detail: 'Suspicious or deceptive' },
      { id: 'legitimate', label: 'Legitimate', detail: 'Expected and trustworthy' }
    ],
    explanation: 'Unexpected delivery messages that request action or mention a fee can be a lure, especially when they do not identify a real order.',
    signals: ['Unexpected delivery', 'Vague sender details', 'Pressure to act']
  },
  {
    type: 'quiz',
    subject: 'A last-minute payment request',
    body: [
      'A message that appears to come from a senior colleague asks you to urgently pay a new supplier. It says they are unavailable for a call.',
      'What should you do before taking any action?'
    ],
    questionTitle: 'How should you handle this request?',
    questionDescription: 'Choose the safest response to an unusual payment request.',
    answer: 'verify',
    options: [
      { id: 'verify', label: 'Verify using a separate known contact method', detail: 'Confirm the request and payment details independently' },
      { id: 'pay', label: 'Pay quickly to meet the deadline', detail: 'Urgency does not confirm the sender' },
      { id: 'reply', label: 'Reply to the message for confirmation', detail: 'A reply may go back to an impostor' },
      { id: 'forward', label: 'Forward it to a coworker to decide', detail: 'Use your organization’s approved reporting process' }
    ],
    explanation: 'An unusual payment request combined with pressure and avoidance of a call is a warning sign. Confirm the request with the colleague using a known number or another trusted channel.',
    signals: ['Unexpected payment', 'Urgency and secrecy', 'Verify out of band']
  },
  {
    type: 'email',
    senderName: 'Microsoft 365 Security',
    senderEmail: 'm365-security@example.net',
    subject: 'Unusual sign-in activity detected',
    date: 'Nov 2, 2026 · 8:02 AM',
    body: [
      'Hello,',
      'A sign-in from a new location was flagged on your Microsoft 365 profile. To prevent a temporary lock, confirm that this activity was yours today.',
      'If you do not recognize it, contact your organization’s IT team using a known support channel.',
      'Microsoft 365 Security'
    ],
    questionTitle: 'Is this email phishing or legitimate?',
    questionDescription: 'Check whether the sender domain fits the identity it claims.',
    answer: 'phishing',
    options: [
      { id: 'phishing', label: 'Phishing', detail: 'Suspicious or deceptive' },
      { id: 'legitimate', label: 'Legitimate', detail: 'Expected and trustworthy' }
    ],
    explanation: 'The sender uses a look-alike identity on an unrelated example.net domain and pressures you with a possible account lock.',
    signals: ['Look-alike brand name', 'Unrelated sender domain', 'Account-lock urgency']
  },
  {
    type: 'quiz',
    subject: 'A QR code from an unknown sender',
    body: [
      'You receive an unexpected email asking you to scan a QR code to view a document. The sender and the document were not expected.',
      'What is the safest choice?'
    ],
    questionTitle: 'What should you do with the QR code?',
    questionDescription: 'QR codes can hide where a scan will take you.',
    answer: 'verify-sender',
    options: [
      { id: 'verify-sender', label: 'Verify the message with the sender through a known channel', detail: 'Do not scan until the request is confirmed' },
      { id: 'scan-phone', label: 'Scan it with your personal phone', detail: 'A different device does not make it safe' },
      { id: 'scan-preview', label: 'Scan it to preview the document', detail: 'A preview can still open an unsafe destination' },
      { id: 'share-code', label: 'Send the code to a teammate to check', detail: 'They face the same unknown destination' }
    ],
    explanation: 'QR codes can conceal destinations just like links. Verify unexpected requests using a known contact method and follow your organization’s security process.',
    signals: ['Unexpected QR code', 'Hidden destination', 'Verify before scanning']
  },
  {
    type: 'email',
    senderName: 'Jordan Lee',
    senderEmail: 'jordan.lee@example.com',
    subject: 'Project check-in — Thursday at 10:30',
    date: 'Nov 1, 2026 · 4:18 PM',
    body: [
      'Hi team,',
      'Quick reminder that our project check-in is Thursday at 10:30 AM in the usual meeting room. We’ll review the open items from this week.',
      'Please bring your status updates. Let me know in the team chat if the time no longer works.',
      'Thanks,\\nJordan'
    ],
    questionTitle: 'Is this email phishing or legitimate?',
    questionDescription: 'Consider the context, sender, and requested action.',
    answer: 'legitimate',
    options: [
      { id: 'phishing', label: 'Phishing', detail: 'Suspicious or deceptive' },
      { id: 'legitimate', label: 'Legitimate', detail: 'Expected and trustworthy' }
    ],
    explanation: 'This routine invitation has a clear context, a named colleague, and no unusual request or pressure.',
    signals: ['Expected work context', 'Known example.com domain', 'No sensitive request']
  },
  {
    type: 'quiz',
    subject: 'An unexpected multi-factor prompt',
    body: [
      'A sign-in approval prompt appears on your device, but you are not trying to sign in.',
      'What should you do?'
    ],
    questionTitle: 'How should you respond to the prompt?',
    questionDescription: 'An unexpected approval request may mean someone else is trying to sign in.',
    answer: 'deny-report',
    options: [
      { id: 'deny-report', label: 'Deny it and report it using your organization’s process', detail: 'Never approve a sign-in you did not initiate' },
      { id: 'approve', label: 'Approve it to make the notification go away', detail: 'This could grant someone account access' },
      { id: 'ignore', label: 'Ignore it and approve the next prompt', detail: 'Repeated prompts can be a warning sign' },
      { id: 'share-code', label: 'Share any verification code with the requester', detail: 'Never share sign-in codes with anyone' }
    ],
    explanation: 'Deny unexpected authentication prompts and report them according to your organization’s process. Do not share verification codes or approve sign-ins you did not start.',
    signals: ['Deny unexpected prompts', 'Never share verification codes', 'Report suspicious activity']
  },
  {
    type: 'email',
    senderName: 'Company IT',
    senderEmail: 'it-notices@example.com',
    subject: 'Planned maintenance: Friday evening',
    date: 'Oct 31, 2026 · 11:06 AM',
    body: [
      'Hello everyone,',
      'Routine maintenance is planned for Friday from 7:00 to 8:00 PM. Some internal tools may be briefly unavailable during this window.',
      'No action is needed. If you have questions, contact the IT help desk using the details in your company directory.',
      'Company IT'
    ],
    questionTitle: 'Is this email phishing or legitimate?',
    questionDescription: 'Look for clear context and whether the message asks you to do anything risky.',
    answer: 'legitimate',
    options: [
      { id: 'phishing', label: 'Phishing', detail: 'Suspicious or deceptive' },
      { id: 'legitimate', label: 'Legitimate', detail: 'Expected and trustworthy' }
    ],
    explanation: 'This is a straightforward service notice. It explains the impact, asks for no account action, and points to a trusted channel.',
    signals: ['Clear maintenance window', 'No action requested', 'Trusted help-desk channel']
  },
  {
    type: 'quiz',
    subject: 'A familiar display name, unfamiliar address',
    body: [
      'A message shows a coworker’s familiar display name, but the full email address is not one you recognize. It asks you to review a document you were not expecting.',
      'What is the best next step?'
    ],
    questionTitle: 'How can you verify who sent it?',
    questionDescription: 'Display names can be copied. Check the message independently.',
    answer: 'known-contact',
    options: [
      { id: 'known-contact', label: 'Contact your coworker through a known channel', detail: 'Confirm the message before opening anything' },
      { id: 'trust-name', label: 'Trust it because the display name is familiar', detail: 'Display names do not prove who sent a message' },
      { id: 'open-doc', label: 'Open the document to see what it is', detail: 'Do not open an unexpected item to investigate' },
      { id: 'reply-address', label: 'Reply to the unfamiliar address', detail: 'The reply may reach the wrong person' }
    ],
    explanation: 'Display names are easy to imitate. Confirm unexpected messages with the person using contact details you already trust, and follow your organization’s reporting process if it seems suspicious.',
    signals: ['Check the full sender address', 'Verify through a separate channel', 'Be cautious with unexpected files']
  }
];

const POINTS_PER_QUESTION = 10;

const state = {
  currentIndex: 0,
  score: 0,
  correct: 0,
  incorrect: 0,
  answered: false
};

const elements = {
  dashboardView: document.querySelector('#dashboard-view'),
  trainingView: document.querySelector('#training-view'),
  resultsView: document.querySelector('#results-view'),
  breadcrumbCurrent: document.querySelector('#breadcrumb-current'),
  dashboardProgress: document.querySelector('#dashboard-progress'),
  dashboardProgressFill: document.querySelector('#dashboard-progress-fill'),
  dashboardProgressLabel: document.querySelector('#dashboard-progress-label'),
  sessionProgress: document.querySelector('#session-progress'),
  sessionProgressFill: document.querySelector('#session-progress-fill'),
  sessionCount: document.querySelector('#session-count'),
  currentScore: document.querySelector('#current-score'),
  emailMetadata: document.querySelector('.email-metadata'),
  senderAvatar: document.querySelector('#sender-avatar'),
  senderName: document.querySelector('#sender-name'),
  senderEmail: document.querySelector('#sender-email'),
  emailDate: document.querySelector('#email-date'),
  cardTypeLabel: document.querySelector('#card-type-label'),
  cardBadgeLabel: document.querySelector('#card-badge-label'),
  cardHeadingLabel: document.querySelector('#card-heading-label'),
  cardNotice: document.querySelector('#card-notice'),
  emailSubject: document.querySelector('#email-subject'),
  emailBody: document.querySelector('#email-body'),
  answerStep: document.querySelector('#answer-step'),
  answerTitle: document.querySelector('#answer-title'),
  answerDescription: document.querySelector('#answer-description'),
  answerButtons: document.querySelector('#answer-buttons'),
  feedbackPanel: document.querySelector('#feedback-panel'),
  feedbackIcon: document.querySelector('#feedback-icon'),
  feedbackTitle: document.querySelector('#feedback-title'),
  feedbackExplanation: document.querySelector('#feedback-explanation'),
  feedbackSignals: document.querySelector('#feedback-signals'),
  answerHint: document.querySelector('#answer-hint'),
  continueButton: document.querySelector('[data-action="continue"]'),
  announcement: document.querySelector('#announcement')
};

function showView(viewName) {
  const views = {
    dashboard: elements.dashboardView,
    training: elements.trainingView,
    results: elements.resultsView
  };

  Object.entries(views).forEach(([name, view]) => {
    view.hidden = name !== viewName;
  });

  elements.breadcrumbCurrent.textContent = viewName === 'training' ? 'Training' : viewName === 'results' ? 'Results' : 'Dashboard';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const isActive = link.dataset.view === (viewName === 'results' ? 'dashboard' : viewName);
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetTraining() {
  state.currentIndex = 0;
  state.score = 0;
  state.correct = 0;
  state.incorrect = 0;
  state.answered = false;
  updateDashboardProgress();
  renderQuestion();
  showView('training');
}

function updateDashboardProgress() {
  const completed = state.correct + state.incorrect;
  const percent = (completed / questions.length) * 100;
  elements.dashboardProgress.setAttribute('aria-valuenow', String(completed));
  elements.dashboardProgressFill.style.width = `${percent}%`;
  elements.dashboardProgressLabel.textContent = completed === 0 ? 'Ready to begin' : `${completed} of ${questions.length} questions complete`;
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const questionNumber = state.currentIndex + 1;
  const completed = state.correct + state.incorrect;
  const progressPercent = (completed / questions.length) * 100;
  const isEmail = question.type === 'email';

  state.answered = false;
  elements.sessionCount.textContent = String(questionNumber).padStart(2, '0');
  elements.sessionProgress.setAttribute('aria-valuenow', String(completed));
  elements.sessionProgressFill.style.width = `${progressPercent}%`;
  elements.currentScore.textContent = String(state.score);
  elements.emailMetadata.hidden = !isEmail;
  elements.cardTypeLabel.textContent = isEmail ? 'MESSAGE PREVIEW' : 'KNOWLEDGE CHECK';
  elements.cardBadgeLabel.textContent = isEmail ? 'FICTIONAL EMAIL' : 'PRACTICE QUESTION';
  elements.cardHeadingLabel.textContent = isEmail ? 'Subject' : 'Scenario';
  elements.cardNotice.textContent = isEmail
    ? 'This simulated message contains no clickable links or attachments.'
    : 'Practice scenario only. No links or real-world actions are involved.';

  if (isEmail) {
    elements.senderAvatar.textContent = question.senderName.charAt(0);
    elements.senderName.textContent = question.senderName;
    elements.senderEmail.textContent = question.senderEmail;
    elements.emailDate.dateTime = question.date;
    elements.emailDate.textContent = question.date;
  }

  elements.emailSubject.textContent = question.subject;
  elements.emailBody.replaceChildren(...question.body.map((paragraph) => {
    const element = document.createElement('p');
    element.textContent = paragraph.replace('\\n', '\n');
    if (paragraph.includes('\\n')) element.classList.add('email-signoff');
    return element;
  }));
  elements.answerStep.textContent = String(questionNumber).padStart(2, '0');
  elements.answerTitle.textContent = question.questionTitle;
  elements.answerDescription.textContent = question.questionDescription;
  elements.answerButtons.replaceChildren(...question.options.map((option, index) => {
    const button = document.createElement('button');
    button.className = 'button answer-button';
    button.type = 'button';
    button.dataset.answer = option.id;
    button.setAttribute('aria-pressed', 'false');

    const number = document.createElement('span');
    number.className = 'answer-choice-index';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String.fromCharCode(65 + index);

    const copy = document.createElement('span');
    copy.className = 'answer-choice-copy';
    const label = document.createElement('strong');
    label.textContent = option.label;
    copy.append(label);
    if (option.detail) {
      const detail = document.createElement('small');
      detail.textContent = option.detail;
      copy.append(detail);
    }

    button.append(number, copy);
    return button;
  }));
  elements.feedbackPanel.hidden = true;
  elements.feedbackPanel.classList.remove('is-incorrect');
  elements.continueButton.hidden = true;
  elements.answerHint.textContent = isEmail ? 'Take a moment to inspect the details.' : 'Think about the safest action before you decide.';
  elements.announcement.textContent = `Question ${questionNumber} of ${questions.length}: ${question.subject}`;
}

function submitAnswer(selectedAnswer) {
  if (state.answered) return;

  const question = questions[state.currentIndex];
  const isCorrect = selectedAnswer === question.answer;
  const correctOption = question.options.find((option) => option.id === question.answer);
  state.answered = true;

  if (isCorrect) {
    state.correct += 1;
    state.score += POINTS_PER_QUESTION;
  } else {
    state.incorrect += 1;
  }

  elements.currentScore.textContent = String(state.score);
  updateDashboardProgress();
  elements.sessionProgress.setAttribute('aria-valuenow', String(state.correct + state.incorrect));
  elements.sessionProgressFill.style.width = `${((state.correct + state.incorrect) / questions.length) * 100}%`;
  elements.feedbackPanel.hidden = false;
  elements.feedbackPanel.classList.toggle('is-incorrect', !isCorrect);
  elements.feedbackIcon.textContent = isCorrect ? '✓' : '!';
  elements.feedbackTitle.textContent = isCorrect
    ? `Correct — +${POINTS_PER_QUESTION} points`
    : question.type === 'email'
      ? `Not quite — this email is ${correctOption.label.toLowerCase()}.`
      : `Not quite — the safest choice was: ${correctOption.label}.`;
  elements.feedbackExplanation.textContent = question.explanation;
  elements.feedbackSignals.replaceChildren(...question.signals.map((signal) => {
    const item = document.createElement('li');
    item.textContent = signal;
    return item;
  }));
  elements.answerHint.textContent = isCorrect ? 'Good choice. Keep looking for these signals.' : 'Every question is a chance to learn.';
  elements.continueButton.hidden = false;
  elements.continueButton.innerHTML = state.currentIndex === questions.length - 1
    ? 'View results <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : 'Continue <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  elements.answerButtons.querySelectorAll('[data-answer]').forEach((button) => {
    const isSelected = button.dataset.answer === selectedAnswer;
    button.disabled = true;
    button.setAttribute('aria-pressed', String(isSelected));
    button.classList.toggle('is-selected', isSelected);
    button.classList.toggle('is-correct', button.dataset.answer === question.answer);
    button.classList.toggle('is-incorrect', isSelected && !isCorrect);
  });
  elements.announcement.textContent = isCorrect
    ? `Correct answer. ${POINTS_PER_QUESTION} points added.`
    : `Incorrect answer. The correct answer is ${correctOption.label}.`;
}

function showResults() {
  const accuracy = Math.round((state.correct / questions.length) * 100);
  let message;

  if (state.score >= 80) {
    message = 'Excellent! You have strong phishing awareness.';
  } else if (state.score >= 60) {
    message = 'Good! However, there is room for improvement.';
  } else {
    message = 'Needs Improvement. More cybersecurity training is recommended.';
  }

  document.querySelector('#final-score').textContent = String(state.score);
  document.querySelector('#correct-count').textContent = String(state.correct);
  document.querySelector('#incorrect-count').textContent = String(state.incorrect);
  document.querySelector('#accuracy-count').textContent = `${accuracy}%`;
  document.querySelector('#results-message').textContent = message;
  document.querySelector('#score-meter-fill').style.width = `${state.score}%`;
  showView('results');
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target.closest('button, a') : null;
  if (!target) return;

  if (target.matches('[data-answer]')) {
    submitAnswer(target.dataset.answer);
  } else if (target.matches('[data-action="start"], [data-action="restart"]')) {
    resetTraining();
  } else if (target.matches('[data-action="continue"]')) {
    if (!state.answered) return;
    if (state.currentIndex === questions.length - 1) {
      showResults();
    } else {
      state.currentIndex += 1;
      renderQuestion();
    }
  } else if (target.matches('[data-action="dashboard"], [data-view="dashboard"]')) {
    showView('dashboard');
  } else if (target.matches('[data-view="training"]')) {
    resetTraining();
  }
});
