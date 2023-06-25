import { ContentRowMovies } from './ContentRowMovies';
import { LastMovieInDb } from './LastMovieInDb';
import { GenresInDb } from './GenresInDb';

export const ContentRowTop = function () {
	const data = [
		{
			titulo: "Movies in Data Base",
			cantidad: 21,
			color: "primary",
			icono: "fa-film fa-2x text-gray-300",
		},
		{
			titulo: "Total awards",
			cantidad: 79,
			color: "success",
			icono: "fa-award fa-2x text-gray-300",
		},
		{
			titulo: "Actors quantity",
			cantidad: 49,
			color: "warning",
			icono: "fa-user fa-2x text-gray-300",
		},
	];
	const genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasia", "Infantiles", "Musical"];

	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			<div className='row'>
				{data.map((data, i) => (
					<ContentRowMovies key={i} titulo={data.titulo} cantidad={data.cantidad} color={data.color} icono={data.icono} />))}
			</div>
			<div className="row">
				<LastMovieInDb />
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
						</div>
						<div className="card-body">
						<div className="row">
							{genres.map((genre, i) => (
								<GenresInDb key={i} genre={genre} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};