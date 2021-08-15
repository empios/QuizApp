export interface ApiResponse {
    results: Api[]
}

export interface Api {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: [string],
    question: string,
    type: string
}
