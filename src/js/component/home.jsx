import React from "react";
import ContactList from "./ContactList.jsx";
import AddContact from "./AddContact.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<ContactList />
            <AddContact />
		</>
	);
};

export default Home;
