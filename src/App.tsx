import { useState } from "react";
import ArticleList from "./components/Article/ArticleList";
import Form from "./components/Form/Form";
import Header from "./components/Header";

export interface User {
  name: string;
  email: string;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const hasUser = Boolean(user);

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser ? <ArticleList /> : <Form setUser={setUser} />}
    </div>
  );
};

export default App;
