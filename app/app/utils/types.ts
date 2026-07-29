export type Book = {
    name: string
    author: string
    genre: string
    rating: number
    cover: string
    id: number
}

export type isHovered = boolean

export type Course = {
    courseName: string,
    teacherName: string,
    nextAssignmentDueDate: string,
}

export type Student = {
    username: string,
    name: string,
    submittedRecentReview: boolean,
    recentReviewPath: string
}