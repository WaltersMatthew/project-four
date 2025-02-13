import { Link } from "react-router-dom";

export default function Navbar(props){


return(
    <div key={props.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <section className="overflow-hidden rounded-lg shadow-lg">

                    <a href={`/teacher`}>
                        <img alt="Your teacher" className="max-h-60 max-w-sm block h-auto w-full mx-auto" src={props.image}/>
                    </a>

                    <header className="flex items-center justify-between p-2 md:p-4">
                            <Link
                                className="no-underline hover:underline text-black" 
                                to={{
                                    pathname: `/teacher`,
                                    state: {
                                        id: props.id,
                                        image: props.image,
                                        name: props.name,
                                        tag_line: props.tag_line,
                                        years_experience: props.years_experience,
                                        average_rating: props.average_rating,
                                        location: props.location,
                                        accepting_students: props.accepting_students

                                    }
                                }}
                                state={{ from: "TeacherCard"}}
                            >
                            
                                <p className="text-xl font-bold">{props.name}</p>
                            </Link>
                    </header>

                    <footer className="items-center justify-between leading-none p-2 ml-2">
                            <p className="mb-4">
                                {props.tag_line}
                            </p>
               
                            <p className="mb-2 text-sm">
                                Years Experience: {props.years_experience}
                            </p>

                            <p className='mb-2 text-sm'>Average Rating: {props.average_rating}</p>
                            
                            <p className='mb-2 text-sm'>Location: {props.location}</p>
                            
                            <p className='mb-2 text-sm'>Accepting new students? {props.accepting_students ? '✅' : '🚫'}</p>
                    </footer>
                </section>
            </div>
)
}