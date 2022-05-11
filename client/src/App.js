import React, {lazy} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";

//page import
import DashboardPage from './pages/dashboard/dashboardpage';
import HomePage from "./pages/home/homepage";
import AboutUsPage from "./pages/about-us/aboutus-page";
import UserAccountPage from './pages/account/user-account-page';
import ContactUsPage from "./pages/contact-us/contact-us-page";
import ContractorAccountPage from './pages/contractor-account/contractor-account-page';
import ContractorCreationPage from './pages/contractor-creation/contractor-creation-page';
import CustomerReviewPage from './pages/customer-review/customer-review-page';
import JobDescriptionPage from "./pages/job-description/job-description-page";
import ReviewsPage from "./pages/reviews/reviewspage";
import SigninSignupPage from "./pages/singin-and-signup/signin-and-signup-page";
import ErrorPage from "./pages/error/error-page";
import JobSearchPage from "./pages/job-description/job-search-page";
// const HomePage = lazy(() => import('./pages/home/homepage'));
// const DashboardPage = lazy(() => import('./pages/dashboard/dashboardpage'));
// const AboutUsPage = lazy(() => import('./pages/about-us/aboutus-page'));
// const ContactUsPage = lazy(() => import('./pages/contact-us/contact-us-page'));
// const UserAccountPage = lazy(() => import('./pages/account/user-account-page'));
// const ContractorAccountPage = lazy(() => import('./pages/contractor-account/contractor-account-page'));
// const ContractorCreationPage = lazy(() => import('./pages/contractor-creation/contractor-creation-page'));
// const CustomerReviewPage = lazy(() => import('./pages/customer-review/customer-review-page'));
// const JobDescriptionPage = lazy(() => import('./pages/job-description/job-description-page'));
// const ReviewsPage = lazy(() => import('./pages/reviews/reviewspage'));
// const SigninSignupPage = lazy(() => import('./pages/singin-and-signup/signin-and-signup-page'));
// const ErrorPage = lazy(() => import('./pages/error/error-page'));

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
            <Route path='/job-search' element={<JobSearchPage/>}/>
            <Route path='*' element={ErrorPage}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;