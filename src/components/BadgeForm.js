import React from "react";

const BadgeForm = ({ onChange, onSubmit, formValues, error }) => {
	return (
		<div>
			<form>
				<div className="form-group">
					<label>First Name</label>
					<input
						onChange={onChange}
						type="text"
						className="form-control"
						name="firstName"
						value={formValues.firstName}
					/>
				</div>
				<div className="form-group">
					<label>Last Name</label>
					<input
						onChange={onChange}
						type="text"
						className="form-control"
						name="lastName"
						value={formValues.lastName}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						onChange={onChange}
						type="email"
						className="form-control"
						name="email"
						value={formValues.email}
					/>
				</div>
				<div className="form-group">
					<label>Job Title</label>
					<input
						onChange={onChange}
						type="text"
						className="form-control"
						name="jobTitle"
						value={formValues.jobTitle}
					/>
				</div>
				<div className="form-group">
					<label>Twitter</label>
					<input
						onChange={onChange}
						type="text"
						className="form-control"
						name="twitter"
						value={formValues.twitter}
					/>
				</div>
				<button onClick={onSubmit} type="button" className="btn btn-primary">
					Save
				</button>

				{error && <p className="text-danger">error.message</p>}
			</form>
		</div>
	);
};

export default BadgeForm;
