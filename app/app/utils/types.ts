// interfaces that link to the backend

import { User } from "reicon-vue"

export interface Book   {
    name: string
    author: string
    genre: string
    rating: number
    cover: string
    book_id: string,
}

export interface assignedReview {
    assigned_review_id: string,
    course_id: string,
    dueDate: string,
}

export interface Course {
    course_id: string,
    courseName: string,
    classCode: string,
    teacherName: string,
    assignedReviews: assignedReview[],
    periodNumber: number,
}

export interface User {
    user_id: string,
    username: string,
    name: string,
}

export interface Student extends User {
    enrolledClasses: Course[]
    completedReviews: assignedReview[]
}

export interface Review   {
    book_id: string,
    user_id: string,
    rating: number
}

export interface Teacher   {
    enrolledClasses: Course[]
    ownedClasses: Course[]
}