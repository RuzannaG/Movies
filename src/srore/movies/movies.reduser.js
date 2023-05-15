import { DELETE_MOVIES } from "./movies.actions"

import (DELETE_MOVIES)
 
 
 const moviesState={
    movieList:[
        {
            id: 1,
            
            Title: "Avatar",
            Year: "2009",
            Genre: "Action, Adventure, Fantasy",
            Director: "James Cameron",
            
            comments:''
    
        },
        {
            id: 2,
        
            Title: "The Wolf of Wall Street",
            Year: "2013",
            Genre: "Biography, Comedy, Crime",
            Director: "Martin Scorsese",
            
    
    
        },
        {
            id: 3,
    
            Title: "I Am Legend",
            Year: "2007",
            Genre: "Drama, Horror, Sci-Fi",
            Director: "Francis Lawrence",
            
    
    
        },
        {
            id: 4,
        
            Title: "300",
            Year: "2006",
            Genre: "Action, Drama, Fantasy",
            Director: "Zack Snyder",
            
    
        },
        {
            id: 5,
            Title: "Interstellar",
            Year: "2014",
            Genre: "Adventure, Drama, Sci-Fi",
            Director: "Christopher Nolan",
            
    
        },
        {
            id: 6,
        
            Title: "Pain & Gain",
            Year: 2013,
            Genre: "Action, Comedy, Crime, Drama",
            Director: "Michael Bay",
        
    
        },
        {
            id: 7,
        
            Title: "Rogue One: A Star Wars Story",
            Year: "2016",
            Genre: "Action, Adventure, Sci-Fi",
            Director: "Gareth Edwards",
            
    
        },
    
        {
            id: 8,
        
            Title: "Assassin's Creed",
            Year: "2016",
            Genre: "Action, Adventure, Fantasy",
            Director: "Justin Kurzel",
    
    
        },
        {
            id: 9,
            
            Title: "Once Upon a Time... in Hollywood",
            Year: 2019,
            Genre: "Comedy, Drama",
            Director: "Quentin Tarantino",
            
        }
    ]
 }

 export const moviesReduser=(state=moviesState,action)=>{
    switch(action.type){
        case DELETE_MOVIES:{
            return{
                ...state,movieList:[]
            }
        }
    }
 }