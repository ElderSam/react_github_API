import React, { Component } from 'react';
import './UserDetails.css';

export default class UserDetails extends Component {

    render() {
        const { login, avatar_url, html_url, site_admin, blog, name, company,
            location, email, bio, followers, following, created_at, updated_at } = this.props.userData;
      
        let renderSite, renderBlog;

        if(site_admin){
            renderSite = <p>site admin: <a href={site_admin} target="_blank" rel="noreferrer">{site_admin}</a></p>
        }

        if(blog){
            renderBlog = <p>blog: <a href={blog} target="_blank" rel="noreferrer">{blog}</a></p>
        }

        return(
            <>
            {login &&
            <section>
                <div id='avatar'>
                    <img src={avatar_url} alt="avatar url"/>
                </div>
                
                <div className="div-info">
                    <h4>Login: {login}</h4>
                    <h4>Nome: {name}</h4>
                    <p>Descrição: {bio}</p>
                    <p>empresa: {company}</p>
                    <p>local: {location}</p>
                    <p>e-mail: {email}</p>
                    <p>{renderSite}</p>
                    <p>{renderBlog}</p>
                </div>

                <div className="div-info">
                    <a id='github-link' href={html_url} target="_blank" rel="noreferrer">GitHub</a>
   
                    <p>seguidores: {followers}</p>
                    <p>seguindo: {following}</p>

                    <p>criado em: {created_at}</p>
                    <p>atualizado em: {updated_at}</p>
                </div>
            </section>}
            </>
        );
    }
}