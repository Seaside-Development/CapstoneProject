import React from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'

// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";

//page import
import HomePage from "./pages/home/homepage";
import DashboardPage from "./pages/dashboard/dashboardpage";
import AboutUsPage from "./pages/about-us/aboutus-page";
import UserAccountPage from "./pages/account/user-account-page";
import ContactUsPage from "./pages/contact-us/contact-us-page";
import ContractorAccountPage from "./pages/contractor-account/contractor-account-page";
import ContractorCreationPage from "./pages/contractor-creation/contractor-creation-page";
import JobDescriptionPage from "./pages/job-description/job-description-page";
import ReviewsPage from "./pages/reviews/reviewspage";
import JobSearchPage from "./pages/job-description/job-search-page";
import ContractorOverviewPage from "./pages/contractor-overview/contractor-Overview-Page";
import SigninPage from "./pages/singin-and-signup/signin";
import SignupFormPage from "./pages/singin-and-signup/signup";
import { ToastContainer } from "react-bootstrap";

const App = () => {
  return (
    <>
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/myAccount" element={<UserAccountPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="/contractor-profile"
            element={<ContractorAccountPage />}
          />
          <Route
            path="/ContractorCreationPage"
            element={<ContractorCreationPage />}
          />
          <Route path="/job-description" element={<JobDescriptionPage />} />
          <Route path="/contractor" element={<ContractorOverviewPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/jobCreation" element={<JobSearchPage />} />
          <Route path="/signinpage" element={<SigninPage/>} />
          <Route path="/SignupFormPage" element={<SignupFormPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    <ToastContainer/>
    </>
  );
};

export default App;
