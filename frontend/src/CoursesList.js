import React, { Component } from 'react';

class CoursesList extends Component {
 static defaultProps =  {
    title: 'Default title'
  }
  constructor(props) {
    super(props);
    this.state = {courses: []};
  }

  componentWillMount() {
    this.callApi()
      .then(res => this.setState({ courses: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/course');
    const body = await response.json();
    
	if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
	const courses = this.state.courses;
    return (
      <div className="Courses">
		{
			courses.map((course) =>
				<div> 
					<div>{course.name}</div>
					<div>{course.description}</div>
				</div>
			)
		}
	</div>
    );
  }
}

export default CoursesList;
