import React, {Component} from 'react';
import './App.css';

class Project extends Component {

	handleTrashClick = () => {
		var {deleteProjects,id} = this.props;
		deleteProjects(id)
	}

	handleEditClick = () => {
		var {setActiveView,setProjectToUpdate,id} = this.props;

		setProjectToUpdate(id)
		setActiveView('edit-project')
	}

    render(){

        var {name,description} = this.props;

        return(
            <div class="card project">
				<img class="card-img-top" src="project.jpg" alt="Card image cap" />
				<div class="card-body">
				    <h5 class="card-title">{name}</h5>
				    <p class="card-text">{description}</p>
				    <p>
				    	<i class="fas fa-heart"></i>
				    	<i class="fas fa-edit" onClick={this.handleEditClick}></i>
				    	<i class="fas fa-trash" onClick={this.handleTrashClick}></i>
				    </p>
				</div>
			</div>
        )
    }
}

export default Project;