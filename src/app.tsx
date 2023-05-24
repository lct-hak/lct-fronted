import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StartPage } from './pages/start-page/start-page';
import { AuthorizationPage } from './pages/authorization/authorization-page';
import { RegistrationPage } from './pages/authorization/registration-page';
import { RestorePage } from './pages/authorization/restore-page';
import { NotFound } from './pages/utils/not-found';
import { FeedPage } from './pages/feed/feed-page';
import { TestPage } from './pages/test/test-page';
import { GroupPage } from './pages/feed/group-page';
import { ProfilePage } from './pages/profile/profile-page';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" element={<StartPage />} />
          <Route path ="/login" element={<AuthorizationPage />} />
          <Route path ="/registration" element={<RegistrationPage />} />
          <Route path ="/restore" element={<RestorePage />} />

          <Route path ="/feed" element={<FeedPage />} />
          {/* TODO: Думаю, так можно скроллить до конкретной карточки (?) */}
          <Route path ="/feed/:id" element={<FeedPage />} />
          <Route path ="/group/:id" element={<GroupPage />} />
          <Route path ="/test" element={<TestPage />} />

          <Route path ="/profile" element={<ProfilePage />} />

          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
