import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const data = [
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "32014529",
    usertype: "Patient",
    state: "",
    signupdate: "August 22, 2025",
    supportareas: "ADHD, General Health",
    lastactive: "August 22, 2025",
    association: "Dr. Rachel Wood",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "42595248",
    usertype: "Provider",
    state: "",
    signupdate: "July 3, 2025",
    supportareas: "N/A",
    lastactive: "August 22, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 9, 2025",
    supportareas: "Depression",
    lastactive: "August 21, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "10259583",
    usertype: "Patient",
    state: "",
    signupdate: "June 25, 2025",
    supportareas: "ADHD, Substance Abuse",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Pre-Registered",
  },
  {
    userid: "251568774",
    usertype: "Provider",
    state: "",
    signupdate: "April 3, 2025",
    supportareas: "N/A",
    lastactive: "August 21, 2025",
    association: "Westlake Medical",
    registrationtype: "Admin Sign-up",
  },
  {
    userid: "802123582",
    usertype: "Patient",
    state: "",
    signupdate: "August 9, 2025",
    supportareas: "Anxiety",
    lastactive: "August 22, 2025",
    association: "Dr. Natalie Jones",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "125588745",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 27, 2025",
    supportareas: "Bipolar",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "658425875",
    usertype: "Subscriber",
    state: "",
    signupdate: "March 1, 2025",
    supportareas: "Post-Partum",
    lastactive: "August 15, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "781238986",
    usertype: "Subscriber",
    state: "",
    signupdate: "Febuary 7, 2025",
    supportareas: "Stress",
    lastactive: "August 19, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
  {
    userid: "417885899",
    usertype: "Subscriber",
    state: "",
    signupdate: "July 27, 2025",
    supportareas: "General Health",
    lastactive: "August 17, 2025",
    association: "N/A",
    registrationtype: "Mobile Sign-up",
  },
];

const AdministratorTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedInvoices = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [currentPage]);

  return (
    <div className="w-294 h-220 ml-52 flex flex-col gap-1.5 border bordergray-200 rounded-[8px] mb-10">
      <div className="w-full max-w-6xl flex flex-row gap-2 mb-5 mt-5 ml-2">
        <ButtonGroup>
          <div className="relative w-70">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <Input
              placeholder="Search"
              className="pl-10 pr-15 py-6 rounded-[8px] shadow-none w-full"
            />
          </div>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-[8px] w-24 py-6 bg-white border text-black text-[14px] font-[400] cursor-pointer"
            variant="secondary"
          >
            State
            <ChevronDown className="mt-0.5" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-[8px] w-31 py-6 bg-white border text-black text-[14px] font-[400] cursor-pointer"
            variant="secondary"
          >
            User Type
            <ChevronDown className="mt-0.5" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-[8px] w-36 py-6 bg-white border text-black text-[14px] font-[400] cursor-pointer"
            variant="secondary"
          >
            Clinic Name
            <ChevronDown className="mt-0.5" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-[8px] w-39 py-6 bg-white border text-black text-[14px] font-[400] cursor-pointer"
            variant="secondary"
          >
            Support Areas
            <ChevronDown className="mt-0.5" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-[8px] w-44 py-6 bg-white border text-black text-[14px] font-[400] cursor-pointer"
            variant="secondary"
          >
            Report Timeframe
            <ChevronDown className="mt-0.5" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-[8px] w-33 py-6 bg-white border text-white bg-[#162958] hover:bg-[#162958] text-[14px] font-[400] cursor-pointer"
            variant="secondary"
          >
            Export Data
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-2 pl-2 py-2 pr-2">
        <Table>
          <TableHeader className="bg-[#162958] text-white h-13">
            <TableRow>
              <TableHead className="text-white text-[14px] font-[400]">
                User ID
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                User Type
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                State
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                Sign Up Date
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                Support Areas
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                Last Active
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                Association
              </TableHead>
              <TableHead className="text-white text-[14px] font-[400]">
                Registration Type
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedInvoices.map((invoice, index) => (
              <TableRow key={`${invoice.userid}-${index}`} className="relative">
                <TableCell className="p-5">{invoice.userid}</TableCell>
                <TableCell>{invoice.usertype}</TableCell>
                <TableCell>{invoice.state}</TableCell>
                <TableCell>{invoice.signupdate}</TableCell>
                <TableCell>{invoice.supportareas}</TableCell>
                <TableCell>{invoice.lastactive}</TableCell>
                <TableCell>{invoice.association}</TableCell>
                <TableCell>{invoice.registrationtype}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination>
          <PaginationContent className="flex items-center gap-2">
            <PaginationItem>
              <Button
                onClick={() => setCurrentPage(1)}
                className="px-3 w-9 rounded cursor-pointer bg-white border hover:bg-white"
              >
                <ChevronsLeft
                  className={`size-6 ${
                    currentPage === 1 ? "text-gray-400" : "text-black"
                  }`}
                />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                isDisabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-3 w-9 rounded cursor-pointer bg-white border hover:bg-white"
              >
                <ChevronLeft
                  className={`size-6 ${
                    currentPage === 1 ? "text-gray-400" : "text-black"
                  }`}
                />
              </PaginationPrevious>
            </PaginationItem>
            {[1, 2, 3].map((num) => (
              <PaginationItem key={num}>
                <Button
                  onClick={() => setCurrentPage(num)}
                  className={`px-3 w-9 rounded-[4px] text-[16px] cursor-pointer border ${
                    currentPage === num
                      ? "bg-[#162958] text-white hover:bg-[#162958]"
                      : "bg-white text-black hover:bg-white"
                  }`}
                >
                  {num}
                </Button>
              </PaginationItem>
            ))}
            <span className="px-3 h-9 rounded-[4px] bg-white text-black border flex items-center justify-center">
              ...
            </span>
            <PaginationItem>
              <Button
                onClick={() => setCurrentPage(totalPages)}
                className={`px-3 w-9 rounded-[4px] text-[16px] cursor-pointer border ${
                  currentPage === totalPages
                    ? "bg-[#162958] text-white"
                    : "bg-white text-black hover:bg-white"
                }`}
              >
                {totalPages}
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                isDisabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className="px-3 w-9 rounded cursor-pointer bg-white border hover:bg-white"
              >
                <ChevronRight
                  className={`size-6 ${
                    currentPage === totalPages ? "text-gray-400" : "text-black"
                  }`}
                />
              </PaginationNext>
            </PaginationItem>
            <PaginationItem>
              <Button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 w-9 rounded cursor-pointer bg-white border hover:bg-white"
              >
                <ChevronsRight
                  className={`size-6 ${
                    currentPage === totalPages ? "text-gray-400" : "text-black"
                  }`}
                />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AdministratorTable;
