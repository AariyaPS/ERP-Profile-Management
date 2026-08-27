export const employees = [
  {
    id: 1,
    employeeId: "EMP-1001",
    name: "John Smith",
    photo: "https://i.pravatar.cc/150?img=12",

    personal: {
      dob: "15 May 1990",
      gender: "Male",
      nationality: "Indian",
      email: "john.smith@example.com",
      phone: "+91 9876543210",
      address: "Hyderabad, Telangana",
      maritalStatus: "Married",
    },

    employment: {
      designation: "Senior Financial Analyst",
      department: "Finance",
      location: "Hyderabad",
      joiningDate: "12 Jan 2024",
      employmentType: "Full Time",
      manager: "Sarah Johnson",
      grade: "G7",
      status: "Active",
    },

    emergencyContact: {
      name: "Mary Smith",
      relationship: "Spouse",
      phone: "+91 9876500000",
      email: "mary@example.com",
    },

    banking: {
      bankName: "HDFC Bank",
      accountNumber: "XXXX XXXX 4587",
      ifsc: "HDFC0001234",
      accountHolder: "John Smith",
      verified: true,
    },

    profileCompletion: 95,

    documents: [
      {
        id: 1,
        name: "Offer Letter",
        type: "Employment",
        status: "Uploaded",
        uploadedOn: "12 Jan 2024",
      },
      {
        id: 2,
        name: "PAN Card",
        type: "Identity",
        status: "Uploaded",
        uploadedOn: "10 Jan 2024",
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
        qualification: "MBA Finance",
        institution: "University of Hyderabad",
        year: "2014",
      },
      {
        qualification: "B.Com",
        institution: "Osmania University",
        year: "2012",
      },
    ],

    skills: ["Financial Analysis", "Excel", "SAP", "Power BI"],

    assets: [
      {
        asset: "Laptop",
        assetId: "AST-1001",
        assignedDate: "12 Jan 2024",
        status: "Active",
      },
      {
        asset: "Access Card",
        assetId: "CARD-204",
        assignedDate: "12 Jan 2024",
        status: "Active",
      },
    ],

    access: {
      role: "Finance Manager",
      applications: ["ERP", "Finance Portal", "Analytics"],
      approvalAuthority: "Level 2",
      lastLogin: "22 Aug 2026, 10:30 AM",
    },

    history: [
      {
        date: "20 Aug 2026",
        field: "Phone Number",
        oldValue: "+91 9876543210",
        newValue: "+91 9999999999",
        changedBy: "John Smith",
      },
      {
        date: "15 Aug 2026",
        field: "Designation",
        oldValue: "Financial Analyst",
        newValue: "Senior Financial Analyst",
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
          status: "Approved",
        },
      ],
    },
  },
];
