import React, {lazy} from "react";
import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";

//page import
const HomePage = lazy(() => import('./pages/home/homepage'));
const DashboardPage = lazy(() => import('./pages/dashboard/dashboardpage'));
const AboutUsPage = lazy(() => import('./pages/about-us/aboutus-page'));
const ContactUsPage = lazy(() => import('./pages/home/homepage'));
const UserAccountPage = lazy(() => import('./pages/account/user-account-page'));
const ContractorAccountPage = lazy(() => import('./pages/contractor-account/contractor-account-page'));
const ContractorCreationPage = lazy(() => import('./pages/contractor-creation/contractor-creation-page'));
const CustomerReviewPage = lazy(() => import('./pages/customer-review/customer-review-page'));
const JobDescriptionPage = lazy(() => import('./pages/job-description/job-description-page'));
const ReviewsPage = lazy(() => import('./pages/reviews/reviewspage'));
const SigninSignupPage = lazy(() => import('./pages/singin-and-signup/signin-and-signup-page'));

const App = () => {
  return (
    <div className="App">
      <p className=" bg-red-500"> TEster</p>
      <main>
        <Routes>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/' component={DashboardPage}/>
            <Route exact path='/' component={AboutUsPage}/>
            <Route exact path='/' component={UserAccountPage}/>
            <Route exact path='/' component={ContactUsPage}/>
            <Route exact path='/' component={ContractorAccountPage}/>
            <Route exact path='/' component={ContractorCreationPage}/>
            <Route exact path='/' component={CustomerReviewPage}/>
            <Route exact path='/' component={DashboardPage}/>
            <Route exact path='/' component={JobDescriptionPage}/>
            <Route exact path='/' component={ReviewsPage}/>
            <Route exact path='/' component={SigninSignupPage}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
