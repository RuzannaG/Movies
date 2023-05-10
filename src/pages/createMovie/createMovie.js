import { useState } from "react";
import { useForm } from "react-hook-form";



export const CreateMovie = ({movie,setMovie}) => {
    const { register, handleSubmit } = useForm()
    
    const [img, setImg]=useState();
    const [title, setTitle]=useState();
    const [year, setYear]=useState();
    const [genre, setGenre]=useState();
    const [director, setDirector]= useState()


    const hadleTitile=(t)=>{
        setTitle(t.target.value)
    }
    const hadleYear=(y)=>{
        setYear(y.target.value)
    }
    const hadleGenre=(g)=>{
        setGenre(g.target.value)
    }
    const hadleDirector=(d)=>{
        setDirector(d.target.value)
    }
    const onSubmit=()=>{
        if(title !=="" && year !== "" && genre !== "" && director !==""){
            setMovie([... movie,{
            id:Math.random(),
            Title:title,
            Year:year,
            Genre:genre,
            Director:director
        }])  
        }
        setTitle('')
        setYear('')
        setGenre('')
        setDirector('')
    }
    return(
    <div>
<div className="new-movie">
    <h4>Add new Movies</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} required onChange={hadleTitile} placeholder="Titile..."/>
        <input {...register("year")} required onChange={hadleYear} placeholder="Year..."/>
        <input {...register("genre")} required onChange={hadleGenre} placeholder="Genre..."/>
        <input {...register("director")} required onChange={hadleDirector} placeholder="Director..."/>

        <input type="submit" value="Add new film"/>

    </form>
</div>

    </div>
    )
   }