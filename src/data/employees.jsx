export const employees = [
  {
    id: 1,
    employeeId: "EMP-1001",
    name: "Ankita Priya",
    photo: "https://i.pravatar.cc/150?img=47",

    personal: {
      dob: "18 March 1998",
      gender: "Female",
      nationality: "Indian",
      email: "ankita.priya@example.com",
      phone: "+91 9876543210",
      address: "Hyderabad, Telangana",
      maritalStatus: "Single",
    },

    employment: {
      designation: "Software Engineer",
      department: "Information Technology",
      location: "Hyderabad",
      joiningDate: "15 Jan 2024",
      employmentType: "Full Time",
      manager: "Karthavya",
      grade: "G6",
      status: "Active",
    },

    emergencyContact: {
      name: "Priya Sharma",
      relationship: "Mother",
      phone: "+91 9876500001",
      email: "priya.sharma@example.com",
    },

    banking: {
      bankName: "HDFC Bank",
      accountNumber: "XXXX XXXX 4587",
      ifsc: "HDFC0001234",
      accountHolder: "Ankita Priya",
      verified: true,
    },

    profileCompletion: 95,

    documents: [
      {
        id: 1,
        name: "Offer Letter",
        type: "Employment",
        status: "Uploaded",
        uploadedOn: "15 Jan 2024",
      },
      {
        id: 2,
        name: "PAN Card",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "12 Jan 2024",
      },
      {
        id: 3,
        name: "Address Proof",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "13 Jan 2024",
      },
    ],

    qualifications: [
      {
        qualification: "M.Tech Computer Science",
        institution: "JNTU Hyderabad",
        year: "2022",
      },
      {
        qualification: "B.Tech Computer Science",
        institution: "Osmania University",
        year: "2020",
      },
    ],

    skills: ["React", "JavaScript", "Java", "SQL", "Bootstrap"],

    assets: [
      {
        asset: "Laptop",
        assetId: "AST-1001",
        assignedDate: "15 Jan 2024",
        status: "Active",
      },
      {
        asset: "Access Card",
        assetId: "CARD-201",
        assignedDate: "15 Jan 2024",
        status: "Active",
      },
    ],

    access: {
      role: "Employee",
      applications: ["ERP", "HR Portal", "Project Management"],
      approvalAuthority: "Level 1",
      lastLogin: "02 Sep 2026, 09:15 AM",
    },

    history: [
      {
        date: "20 Aug 2026",
        field: "Designation",
        oldValue: "Junior Software Engineer",
        newValue: "Software Engineer",
        changedBy: "HR Admin",
      },
    ],

    attendance: {
      totalWorkingDays: 22,
      presentDays: 20,
      leaveDays: 2,
      totalHoursWorked: 160,
      averageHoursPerDay: 8,

      leaves: [
        {
          from: "08 Aug 2026",
          to: "08 Aug 2026",
          days: 1,
          type: "Casual Leave",
          reason: "Personal work",
          status: "Approved",
        },
        {
          from: "25 Aug 2026",
          to: "25 Aug 2026",
          days: 1,
          type: "Sick Leave",
          reason: "Not feeling well",
          status: "Pending",
        },
      ],
    },
  },

  {
    id: 2,
    employeeId: "EMP-1002",
    name: "Karthavya",
    photo: "https://i.pravatar.cc/150?img=11",

    personal: {
      dob: "12 July 1992",
      gender: "Male",
      nationality: "Indian",
      email: "karthavya@example.com",
      phone: "+91 9887654321",
      address: "Bengaluru, Karnataka",
      maritalStatus: "Married",
    },

    employment: {
      designation: "Engineering Manager",
      department: "Information Technology",
      location: "Bengaluru",
      joiningDate: "10 June 2021",
      employmentType: "Full Time",
      manager: "Rajashekar",
      grade: "G9",
      status: "Active",
    },

    emergencyContact: {
      name: "Anita Rao",
      relationship: "Spouse",
      phone: "+91 9887600002",
      email: "anita.rao@example.com",
    },

    banking: {
      bankName: "ICICI Bank",
      accountNumber: "XXXX XXXX 6721",
      ifsc: "ICIC0002345",
      accountHolder: "Karthavya",
      verified: true,
    },

    profileCompletion: 100,

    documents: [
      {
        id: 1,
        name: "Offer Letter",
        type: "Employment",
        status: "Uploaded",
        uploadedOn: "10 Jun 2021",
      },
      {
        id: 2,
        name: "PAN Card",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "08 Jun 2021",
      },
      {
        id: 3,
        name: "Address Proof",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "09 Jun 2021",
      },
    ],

    qualifications: [
      {
        qualification: "M.Tech",
        institution: "IIT Hyderabad",
        year: "2016",
      },
      {
        qualification: "B.Tech",
        institution: "JNTU Hyderabad",
        year: "2014",
      },
    ],

    skills: ["Java", "Spring Boot", "React", "AWS", "System Design"],

    assets: [
      {
        asset: "Laptop",
        assetId: "AST-1002",
        assignedDate: "10 Jun 2021",
        status: "Active",
      },
      {
        asset: "Access Card",
        assetId: "CARD-202",
        assignedDate: "10 Jun 2021",
        status: "Active",
      },
    ],

    access: {
      role: "Engineering Manager",
      applications: ["ERP", "HR Portal", "Project Management", "Analytics"],
      approvalAuthority: "Level 3",
      lastLogin: "02 Sep 2026, 09:05 AM",
    },

    history: [
      {
        date: "01 Apr 2026",
        field: "Designation",
        oldValue: "Technical Lead",
        newValue: "Engineering Manager",
        changedBy: "HR Admin",
      },
    ],

    attendance: {
      totalWorkingDays: 22,
      presentDays: 21,
      leaveDays: 1,
      totalHoursWorked: 168,
      averageHoursPerDay: 8,

      leaves: [
        {
          from: "18 Aug 2026",
          to: "18 Aug 2026",
          days: 1,
          type: "Casual Leave",
          reason: "Personal work",
          status: "Approved",
        },
      ],
    },
  },

  {
    id: 3,
    employeeId: "EMP-1003",
    name: "Rajashekar",
    photo: "https://i.pravatar.cc/150?img=13",

    personal: {
      dob: "25 November 1988",
      gender: "Male",
      nationality: "Indian",
      email: "rajashekar@example.com",
      phone: "+91 9765432109",
      address: "Hyderabad, Telangana",
      maritalStatus: "Married",
    },

    employment: {
      designation: "Senior Project Manager",
      department: "Projects",
      location: "Hyderabad",
      joiningDate: "05 February 2019",
      employmentType: "Full Time",
      manager: "Salman Sheikh",
      grade: "G10",
      status: "Active",
    },

    emergencyContact: {
      name: "Lakshmi Reddy",
      relationship: "Spouse",
      phone: "+91 9765400003",
      email: "lakshmi.reddy@example.com",
    },

    banking: {
      bankName: "State Bank of India",
      accountNumber: "XXXX XXXX 3412",
      ifsc: "SBIN0003456",
      accountHolder: "Rajashekar",
      verified: true,
    },

    profileCompletion: 98,

    documents: [
      {
        id: 1,
        name: "Offer Letter",
        type: "Employment",
        status: "Uploaded",
        uploadedOn: "05 Feb 2019",
      },
      {
        id: 2,
        name: "PAN Card",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "02 Feb 2019",
      },
      {
        id: 3,
        name: "Address Proof",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "03 Feb 2019",
      },
    ],

    qualifications: [
      {
        qualification: "MBA Project Management",
        institution: "University of Hyderabad",
        year: "2012",
      },
      {
        qualification: "B.Tech",
        institution: "JNTU Hyderabad",
        year: "2010",
      },
    ],

    skills: ["Project Management", "Agile", "Scrum", "Leadership", "JIRA"],

    assets: [
      {
        asset: "Laptop",
        assetId: "AST-1003",
        assignedDate: "05 Feb 2019",
        status: "Active",
      },
      {
        asset: "Mobile Phone",
        assetId: "MOB-103",
        assignedDate: "05 Feb 2019",
        status: "Active",
      },
    ],

    access: {
      role: "Project Manager",
      applications: ["ERP", "Project Management", "CRM", "Analytics"],
      approvalAuthority: "Level 3",
      lastLogin: "01 Sep 2026, 06:30 PM",
    },

    history: [
      {
        date: "15 Jan 2026",
        field: "Department",
        oldValue: "Operations",
        newValue: "Projects",
        changedBy: "HR Admin",
      },
    ],

    attendance: {
      totalWorkingDays: 22,
      presentDays: 19,
      leaveDays: 3,
      totalHoursWorked: 152,
      averageHoursPerDay: 8,

      leaves: [
        {
          from: "05 Aug 2026",
          to: "06 Aug 2026",
          days: 2,
          type: "Casual Leave",
          reason: "Family function",
          status: "Approved",
        },
        {
          from: "22 Aug 2026",
          to: "22 Aug 2026",
          days: 1,
          type: "Sick Leave",
          reason: "Medical reasons",
          status: "Approved",
        },
      ],
    },
  },

  {
    id: 4,
    employeeId: "EMP-1004",
    name: "Saikrishna",
    photo: "https://i.pravatar.cc/150?img=14",

    personal: {
      dob: "03 September 1995",
      gender: "Male",
      nationality: "Indian",
      email: "saikrishna@example.com",
      phone: "+91 9988776655",
      address: "Vijayawada, Andhra Pradesh",
      maritalStatus: "Single",
    },

    employment: {
      designation: "Business Analyst",
      department: "Finance",
      location: "Hyderabad",
      joiningDate: "20 August 2023",
      employmentType: "Full Time",
      manager: "Rajashekar",
      grade: "G5",
      status: "Active",
    },

    emergencyContact: {
      name: "Srinivas Rao",
      relationship: "Father",
      phone: "+91 9988700004",
      email: "srinivas.rao@example.com",
    },

    banking: {
      bankName: "Axis Bank",
      accountNumber: "XXXX XXXX 8912",
      ifsc: "UTIB0004567",
      accountHolder: "Saikrishna",
      verified: true,
    },

    profileCompletion: 92,

    documents: [
      {
        id: 1,
        name: "Offer Letter",
        type: "Employment",
        status: "Uploaded",
        uploadedOn: "20 Aug 2023",
      },
      {
        id: 2,
        name: "PAN Card",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "18 Aug 2023",
      },
      {
        id: 3,
        name: "Address Proof",
        type: "Identity",
        status: "Pending",
        uploadedOn: "-",
      },
    ],

    qualifications: [
      {
        qualification: "MBA",
        institution: "Andhra University",
        year: "2019",
      },
      {
        qualification: "B.Com",
        institution: "Krishna University",
        year: "2017",
      },
    ],

    skills: ["Excel", "Power BI", "SQL", "Financial Analysis"],

    assets: [
      {
        asset: "Laptop",
        assetId: "AST-1004",
        assignedDate: "20 Aug 2023",
        status: "Active",
      },
    ],

    access: {
      role: "Business Analyst",
      applications: ["ERP", "Finance Portal", "Analytics"],
      approvalAuthority: "Level 2",
      lastLogin: "02 Sep 2026, 09:45 AM",
    },

    history: [
      {
        date: "10 May 2026",
        field: "Location",
        oldValue: "Vijayawada",
        newValue: "Hyderabad",
        changedBy: "HR Admin",
      },
    ],

    attendance: {
      totalWorkingDays: 22,
      presentDays: 20,
      leaveDays: 2,
      totalHoursWorked: 160,
      averageHoursPerDay: 8,

      leaves: [
        {
          from: "12 Aug 2026",
          to: "13 Aug 2026",
          days: 2,
          type: "Casual Leave",
          reason: "Personal work",
          status: "Approved",
        },
      ],
    },
  },

  {
    id: 5,
    employeeId: "EMP-1005",
    name: "Salman Sheikh",
    photo: "https://i.pravatar.cc/150?img=15",

    personal: {
      dob: "14 January 1991",
      gender: "Male",
      nationality: "Indian",
      email: "salman.sheikh@example.com",
      phone: "+91 9123456789",
      address: "Mumbai, Maharashtra",
      maritalStatus: "Married",
    },

    employment: {
      designation: "Finance Manager",
      department: "Finance",
      location: "Mumbai",
      joiningDate: "18 March 2020",
      employmentType: "Full Time",
      manager: "Director Finance",
      grade: "G8",
      status: "Active",
    },

    emergencyContact: {
      name: "Ayesha Sheikh",
      relationship: "Spouse",
      phone: "+91 9123400005",
      email: "ayesha.sheikh@example.com",
    },

    banking: {
      bankName: "ICICI Bank",
      accountNumber: "XXXX XXXX 5634",
      ifsc: "ICIC0005678",
      accountHolder: "Salman Sheikh",
      verified: true,
    },

    profileCompletion: 97,

    documents: [
      {
        id: 1,
        name: "Offer Letter",
        type: "Employment",
        status: "Uploaded",
        uploadedOn: "18 Mar 2020",
      },
      {
        id: 2,
        name: "PAN Card",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "15 Mar 2020",
      },
      {
        id: 3,
        name: "Address Proof",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "16 Mar 2020",
      },
    ],

    qualifications: [
      {
        qualification: "MBA Finance",
        institution: "University of Mumbai",
        year: "2015",
      },
      {
        qualification: "B.Com",
        institution: "Mumbai University",
        year: "2013",
      },
    ],

    skills: ["Financial Management", "SAP", "Excel", "Power BI", "Accounting"],

    assets: [
      {
        asset: "Laptop",
        assetId: "AST-1005",
        assignedDate: "18 Mar 2020",
        status: "Active",
      },
      {
        asset: "Access Card",
        assetId: "CARD-205",
        assignedDate: "18 Mar 2020",
        status: "Active",
      },
    ],

    access: {
      role: "Finance Manager",
      applications: ["ERP", "Finance Portal", "Analytics"],
      approvalAuthority: "Level 3",
      lastLogin: "02 Sep 2026, 08:55 AM",
    },

    history: [
      {
        date: "01 Jan 2026",
        field: "Designation",
        oldValue: "Senior Financial Analyst",
        newValue: "Finance Manager",
        changedBy: "HR Admin",
      },
    ],

    attendance: {
      totalWorkingDays: 22,
      presentDays: 18,
      leaveDays: 4,
      totalHoursWorked: 144,
      averageHoursPerDay: 8,

      leaves: [
        {
          from: "10 Aug 2026",
          to: "11 Aug 2026",
          days: 2,
          type: "Sick Leave",
          reason: "Medical reasons",
          status: "Approved",
        },
        {
          from: "20 Aug 2026",
          to: "21 Aug 2026",
          days: 2,
          type: "Casual Leave",
          reason: "Personal work",
          status: "Pending",
        },
      ],
    },
  },
];