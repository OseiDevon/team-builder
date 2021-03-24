import React from "react";

export default function SoandSoForm(props) {
	const { values, update, submit } = props;

	const onChange = (evt) => {
		const { name, value } = evt.target;
		update(name, value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<form className="form container" onSubmit={onSubmit}>
			<div className="form-group inputs">
				<label>
					Username
					<input
						type="text"
						name="username"
						onChange={onChange}
						value={values.username}
						placeholder="Type A Username"
						maxLength="30"
					/>
				</label>

				<label>
					Email
					<input
						type="email"
						name="email"
						onChange={onChange}
						value={values.email}
						placeholder="Type An Email"
						maxLength="30"
					/>
				</label>


				<label>
					Role

					<select name="role" value={values.role} onChange={onChange}>
						<option value="">---select role---</option>
						<option value="instructor">Instructor</option>
						<option value="student">Student</option>
						<option value="tl">Team Lead</option>
					</select>
				</label>

				<div className="submit">
					<button>submit</button>
				</div>
			</div>
		</form>
	);
}
