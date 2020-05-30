import React from 'react'
import Button from 'element/Button'
import Fade from 'react-reveal/Fade';

export default function MostPicked(props) {
    return (
        // refMostPicked disini digunakaan seperti id yang ada di html, yaitu untuk penunjuk section
        <section className="container" ref={props.refMostPicked}>
            <Fade bottom>
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                {
                    // creating automatic grid
                    // perulangan untuk memanggil data dan menerima v.1 = item & index
                    props.data.map( (item, index) => {
                        return (
                            // logic untuk pembagian row, jadi jika indexnya 0 ambil posisi 2 row
                            // klo tidak ambil 1 row
                            <div key={`mostpicked-${index}`} className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
                                {/* delay dibawah ini pengaturan agar fade yang ditampilkan bergantian sesuai dengan nomor index */}
                                <Fade bottom delay={200 * index}>
                                    <div className="card">
                                        <div className="card card-featured">
                                            <div className="tag">
                                                ${item.price}
                                                <span className="font-weight-light">per {item.unit}</span>
                                            </div>
                                            <figure className="img-wrapper">
                                                <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                                                    <h5>{item.name}</h5>
                                                </Button>
                                                <span>
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        );
                    })
                }
            </div>
            </Fade>
        </section>
    )
}
