import React, { useState, useEffect } from "react";
import SoandSo from "./components/SoandSo";
import SoandSoForm from "./components/SoandSoForm";
import axios from "./axios";

const initialFormValues = {
	username: "",
	email: "",
	role: "",
};

export default function App() {
	const [person, setPerson] = useState([]);


	const [formValues, setFormValues] = useState(initialFormValues);

	const updateForm = (inputName, inputValue) => {

		setFormValues({ ...formValues, [inputName]: inputValue });
	};

	const submitForm = () => {
		const newSoandSo = {
			username: formValues.username.trim(),
			email: formValues.email.trim(),
			role: formValues.role,
		};

		if (!newSoandSo.username || !newSoandSo.email || !newSoandSo.role) {
			return;
		}
		axios
			.post("fakeapi.com", newSoandSo)
			.then((res) => {
				setSoandSo([newSoandSo, ...person]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				debugger;
			});
	};

	useEffect(() => {
		axios.get("fakeapi.com").then((res) => setSoandSo(res.data));
	}, []);

	return (
		<div className="container">
			<h1>Form App</h1>

			<SoandSoForm
				values={formValues}
				update={updateForm}
				submit={submitForm}
			/>

			{SoandSo.map((SoandSo) => {
				return <SoandSo key={SoandSo.id} details={SoandSo} />;
			})}
		</div>
	);
}
