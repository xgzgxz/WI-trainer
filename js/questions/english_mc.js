export const questions = [
{
        
        schwierigkeit: "leicht",
        question: "According to the document, what is the general tone of business apologies?",
        options: [
            "They are always fairly formal.",
            "They should be very informal to build trust.",
            "They are strictly legal and written by lawyers.",
            "They should be casual and brief."
        ],
        correct: [0],
        explanation: "The document explicitly states right at the beginning: 'Please keep in mind that apologies are always fairly formal.'"
    },
    {
        
        schwierigkeit: "leicht",
        question: "Which of the following phrases belong to the 'Apologize' category? (Select all that apply)",
        options: [
            "Please accept my sincere / our deepest apologies for…",
            "The error was due to…",
            "I would like to express my deep regrets for…",
            "I can promise you that the highest quality standards will be met…"
        ],
        correct: [0, 2],
        explanation: "'Please accept my sincere... apologies' and 'I would like to express my deep regrets for...' are listed under the 'Apologize' section. 'The error was due to...' is an 'Explain' phrase, and 'I can promise you...' is a 'Promise' phrase."
    },
    {
        
        schwierigkeit: "leicht",
        question: "If you need to apologize for an omission or something you forgot to do, which phrase from the 'Apologize' list is the most appropriate?",
        options: [
            "I apologize for my failure to…",
            "I can appreciate that.",
            "I see your point.",
            "Thank you for pointing that out."
        ],
        correct: [0],
        explanation: "'I apologize for my failure to…' is explicitly listed under 'Apologize' and is perfectly suited for an omission."
    },
    {
        
        schwierigkeit: "leicht",
        question: "Which of these phrases is the correct way to apologize on behalf of your entire organization?",
        options: [
            "My bad for the company.",
            "I would like to apologize on behalf of our company.",
            "The company is fairly formal.",
            "We are convinced that the changes we have implemented..."
        ],
        correct: [1],
        explanation: "The exact phrase provided in the document for this situation is 'I would like to apologize on behalf of our company.'"
    },

    // --- ENGLISH: Medium ---
    {
        
        schwierigkeit: "mittel",
        question: "Which of the following elements are required for a 'perfect business apology' according to the text? (Select all that apply)",
        options: [
            "Blame external factors for the issue",
            "Take responsibility",
            "Provide a form of restitution (if possible)",
            "Keep the account of the situation as brief as possible"
        ],
        correct: [1, 2],
        explanation: "A perfect business apology includes 'take responsibility' and 'provide a form of restitution (if possible)'. It also states you should give a 'detailed account' (not brief) and 'recognize your/the company’s role' (instead of blaming external factors)."
    },
    {
        
        schwierigkeit: "mittel",
        question: "Which phrase should you use if you want to 'Acknowledge/recognize' the impact of your actions on the other party?",
        options: [
            "In our efforts to optimize our distribution process, we overlooked…",
            "I understand that our actions meant…",
            "We will be increasing our efforts when it comes to…",
            "Please allow me to apologize for…"
        ],
        correct: [1],
        explanation: "'I understand that our actions meant…' is categorized specifically under 'Acknowledge/recognize' to validate the other party's experience."
    },
    {
        
        schwierigkeit: "mittel",
        question: "To properly 'Explain' what went wrong without making it sound like a cheap excuse, which phrasing does the document suggest?",
        options: [
            "I am particularly sorry for…",
            "We appreciate that this caused you inconvenience…",
            "In our efforts to optimize our distribution process, we overlooked…",
            "I will let my manager know how you feel…"
        ],
        correct: [2],
        explanation: "'In our efforts to optimize our distribution process, we overlooked…' is listed under the 'Explain' category to professionally state how the error occurred."
    },
    {
        
        schwierigkeit: "mittel",
        question: "According to the bullet points of a perfect apology, what should you do regarding your involvement in the problem?",
        options: [
            "Deny any involvement if possible.",
            "Recognize your/the company’s role in the situation.",
            "Wait for the customer to prove your involvement.",
            "State that your role was minor."
        ],
        correct: [1],
        explanation: "One of the key bullet points for a perfect apology is to 'recognize your/the company’s role in the situation'."
    },
    {
        
        schwierigkeit: "mittel",
        question: "Which phrase demonstrates that you did not realize the consequences of your actions beforehand?",
        options: [
            "I am sorry. I did not mean to..",
            "I can imagine that you felt like…",
            "(I am) sorry. I did not realize the impact of…",
            "I am / we are terribly sorry about that."
        ],
        correct: [2],
        explanation: "The phrase '(I am) sorry. I did not realize the impact of…' from the 'Apologize' section specifically addresses a lack of prior awareness regarding the consequences."
    },

    // --- ENGLISH: Hard ---
    {
        
        schwierigkeit: "schwer",
        question: "How do phrases from the 'Explain' category differ from the 'Promise' category based on the provided text?",
        options: [
            "'Explain' phrases offer financial compensation, while 'Promise' phrases focus on past events.",
            "'Explain' phrases describe the cause of the issue (e.g., 'The defect was caused by...'), while 'Promise' phrases focus on future improvements and solutions.",
            "'Explain' phrases are informal, while 'Promise' phrases are highly formal.",
            "There is no difference; they can be used interchangeably in the apology."
        ],
        correct: [1],
        explanation: "'Explain' phrases like 'The defect was caused by...' deal with the reasons behind an error. 'Promise' phrases like 'In the future, our focus will be...' or 'We have increased our efforts to ensure that...' deal with preventing recurrence and finding solutions."
    },
    {
        
        schwierigkeit: "schwer",
        question: "Providing 'a form of restitution' is part of a perfect apology. Which of the following phrases from the 'Promise' category are practical examples of offering restitution or a direct solution to the affected party? (Select all that apply)",
        options: [
            "Here are some vouchers for lunch for any trouble we may have caused you.",
            "We are convinced that the changes we have implemented will prevent this...",
            "I am going to see how we can make this better for you.",
            "I am / we are terribly sorry about that."
        ],
        correct: [0, 2],
        explanation: "Offering vouchers ('Here are some vouchers...') and actively looking for ways to improve the customer's specific situation ('I am going to see how we can make this better...') are concrete forms of restitution and solution-finding listed under the 'Promise' section."
    },
    {
        
        schwierigkeit: "schwer",
        question: "In the context of the document, which category does the phrase 'As a result of our decision, our relationship was affected…' belong to, and what is its purpose?",
        options: [
            "Apologize: It serves to formally ask for forgiveness.",
            "Promise: It guarantees that relationships will not be damaged in the future.",
            "Explain: It provides a technical reason for a distribution failure.",
            "Acknowledge/recognize: It validates the negative impact the company's actions had on the business relationship."
        ],
        correct: [3],
        explanation: "This phrase is listed under 'Acknowledge/recognize'. Its purpose is to show the other party that you understand the emotional or professional damage caused by your decisions."
    },
    {
        
        schwierigkeit: "schwer",
        question: "If a customer is very upset and you need to escalate the issue internally while assuring the customer you are taking it seriously, which 'Promise' phrase is best?",
        options: [
            "I will let my manager know how you feel, and let’s see if we can find a solution.",
            "We see that our actions impacted you unnecessarily…",
            "In the future, our focus will be on…, so that this situation will not repeat itself.",
            "I am going to see how we can make this better for you."
        ],
        correct: [0],
        explanation: "The phrase 'I will let my manager know how you feel, and let’s see if we can find a solution.' directly involves escalating the emotional impact to management to seek a resolution, as listed under the 'Promise' category."
    },
    {
        
        schwierigkeit: "schwer",
        question: "Which of these combinations correctly pairs a bullet point from 'The perfect apology' checklist with an appropriate matching phrase from the document?",
        options: [
            "'give a detailed account of the situation' -> 'Thank you for pointing that out.'",
            "'acknowledge the hurt or damage done' -> 'I can imagine that you felt like…'",
            "'promise that it won’t happen again' -> 'The error was due to…'",
            "'provide a form of restitution' -> 'Please accept my apologies.'"
        ],
        correct: [1],
        explanation: "The phrase 'I can imagine that you felt like…' matches the checklist item 'acknowledge the hurt or damage done' by validating the other person's emotional response. The other pairings mismatch the checklist intent with the phrase's category."
    }
];