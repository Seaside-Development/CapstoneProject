import React, {lazy} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header.components";

//page import
const HomePage = lazy(() => import('./pages/home/homepage'));
const DashboardPage = lazy(() => import('./pages/dashboard/dashboardpage'));
const AboutUsPage = lazy(() => import('./pages/about-us/aboutus-page'));
const ContactUsPage = lazy(() => import('./pages/contact-us/contact-us-page'));
const UserAccountPage = lazy(() => import('./pages/account/user-account-page'));
const ContractorAccountPage = lazy(() => import('./pages/contractor-account/contractor-account-page'));
const ContractorCreationPage = lazy(() => import('./pages/contractor-creation/contractor-creation-page'));
const CustomerReviewPage = lazy(() => import('./pages/customer-review/customer-review-page'));
const JobDescriptionPage = lazy(() => import('./pages/job-description/job-description-page'));
const ReviewsPage = lazy(() => import('./pages/reviews/reviewspage'));
const SigninSignupPage = lazy(() => import('./pages/singin-and-signup/signin-and-signup-page'));
const ErrorPage = lazy(() => import('./pages/error/error-page'));

const App = () => {
  return (
    <Router>
      <div className="content">
      <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path='/about-us' element={<AboutUsPage/>}/>
            <Route path='/accounts' element={<UserAccountPage/>}/>
            <Route path='/contact-us' element={<ContactUsPage/>}/>
            <Route path='/contractor-profile' element={<ContractorAccountPage/>}/>
            <Route path='/service-creation' element={<ContractorCreationPage/>}/>
            <Route path='/customer-reveiws' element={<CustomerReviewPage/>}/>
            <Route path='/job-description' element={<JobDescriptionPage/>}/>
            <Route path='/reviews' element={<ReviewsPage/>}/>
            <Route path='/signin-signup' element={<SigninSignupPage/>}/>
            <Route path='*' element={ErrorPage}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
