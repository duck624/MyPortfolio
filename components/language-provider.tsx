"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type LanguageContextype = {
  language: string
  changeLanguage: (lng: string) => void
  t: (text: string) => string
}

const LanguageContext = createContext<LanguageContextype | undefined>(undefined)

const translations: Record<string, string> = {
  // Navigation
  About: "Giới thiệu",
  Education: "Học vấn",
  Experience: "Kinh nghiệm",
  Projects: "Dự án",
  Skills: "Kỹ năng",
  Contact: "Liên hệ",
  "Download CV": "Tải CV",

  // Hero
  "Software Developer": "Lập trình viên Phát triển Phần mềm",
  "Software engineering student with a background in web development, looking for an opportunity to contribute to real-world projects and grow as a developer.":
    "Sinh viên kỹ thuật phần mềm với nền tảng phát triển web, tìm kiếm cơ hội đóng góp vào các dự án thực tế và phát triển như một developer.",
  "Get In Touch": "Liên hệ",
  "Github": "Github",

  // About
  "About Me": "Giới thiệu",
  "Passionate software engineering student with hands-on experience in web development, eager to contribute to innovative projects and grow in the tech industry.":
    "Sinh viên kỹ thuật phần mềm đam mê với kinh nghiệm thực tế trong phát triển web, mong muốn đóng góp vào các dự án sáng tạo và phát triển trong ngành công nghệ.",
  "Full-Stack Development": "Phát triển Full-Stack",
  "Experienced in both frontend and backend development with modern technologies like React, Laravel, and C#.":
    "Có kinh nghiệm trong cả phát triển frontend và backend với các công nghệ hiện đại như React, Laravel và C#.",
  "Problem Solving": "Giải quyết vấn đề",
  "Strong analytical skills with a focus on delivering high-quality software solutions and efficient problem-solving approaches.":
    "Kỹ năng phân tích mạnh mẽ với trọng tâm cung cấp các giải pháp phần mềm chất lượng cao và phương pháp giải quyết vấn đề hiệu quả.",
  "Team Collaboration": "Hợp tác nhóm",
  "Excellent teamwork and communication skills, with experience working in collaborative environments and agile methodologies.":
    "Kỹ năng làm việc nhóm và giao tiếp xuất sắc, có kinh nghiệm làm việc trong môi trường hợp tác và phương pháp agile.",

  // Education
  "Academic background and achievements": "Nền tảng học thuật và thành tích",
  "Bachelor's Degree in Software Engineering": "Cử nhân Kỹ thuật Phần mềm",
  "University of Economics Ho Chi Minh City (UEH)": "Đại học Kinh tế TP.HCM (UEH)",
  "Program Details": "Chi tiết chương trình",
  "Major: Software Engineering": "Chuyên ngành: Kỹ thuật Phần mềm",
  "Focus: Fullstack Software Development": "Định hướng: Phát triển phần mềm Fullstack",
  "Status: Undergraduate": "Trạng thái: Đang học",
  "Academic Performance": "Thành tích học tập",
  "GPA: 3.62 / 4.0": "GPA: 3.62 / 4.0",

  // Experience
  "Work Experience": "Kinh nghiệm làm việc",
  "Professional experience and contributions": "Kinh nghiệm chuyên môn và đóng góp",
  "Web Developer (Intern)": "Web Developer (Thực tập)",
  "Grant Thornton": "Grant Thornton",
  "Key Responsibilities & Achievements": "Trách nhiệm & Thành tích chính",
  "Developed an internal web system for managing departmental expenses using ReactJS and Laravel":
    "Phát triển hệ thống web nội bộ quản lý chi phí phòng ban sử dụng ReactJS và Laravel",
  "Implemented key front-end and back-end features under supervision, contributing to core modules":
    "Triển khai các tính năng front-end và back-end chính dưới sự giám sát, đóng góp vào các module cốt lõi",
  "Conducted testing and bug fixing to ensure product quality and optimal performance":
    "Thực hiện kiểm thử và sửa lỗi để đảm bảo chất lượng sản phẩm và hiệu suất tối ưu",

  // Projects
  "Featured Projects": "Dự án nổi bật",
  "A showcase of my recent work and contributions": "Giới thiệu các công việc và đóng góp gần đây của tôi",
  "In Progress": "Đang thực hiện",
  Completed: "Hoàn thành",
  "Key Responsibilities:": "Trách nhiệm chính:",
  Code: "Mã nguồn",
  Demo: "Demo",

  // Skills
  "Skills & Expertise": "Kỹ năng & Chuyên môn",
  "Technical skills and competencies I've developed": "Các kỹ năng kỹ thuật và năng lực đã phát triển",
  "Frontend Development": "Phát triển Frontend",
  "Backend Development": "Phát triển Backend",
  "Database & Tools": "Cơ sở dữ liệu & Công cụ",
  "Soft Skills": "Kỹ năng mềm",
  Certifications: "Chứng chỉ",
  Awards: "Giải thưởng",

  // Contact
  "Let's discuss opportunities and collaborate on exciting projects":
    "Hãy thảo luận về cơ hội và hợp tác trong các dự án thú vị",
  "Contact Information": "Thông tin liên hệ",
  Email: "Email",
  Phone: "Điện thoại",
  Location: "Địa điểm",
  "Ho Chi Minh City, Vietnam": "TP. Hồ Chí Minh, Việt Nam",
  "Follow Me": "Theo dõi tôi",
  "Send Message": "Gửi tin nhắn",
  "First Name": "Tên",
  "Last Name": "Họ",
  Subject: "Chủ đề",
  Message: "Tin nhắn",
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en")

  const changeLanguage = (lng: string) => {
    setLanguage(lng)
    localStorage.setItem("language", lng)
  }

  const t = (text: string) => {
    if (language === "vi") {
      return translations[text] || text
    }
    return text
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)
  }, [])

  return <LanguageContext.Provider value={{ language, changeLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
