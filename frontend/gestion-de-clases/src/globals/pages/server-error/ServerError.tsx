import './server-error.css'


const ServerErrorContainer = () => {

    return (
        <section className = "error-500">
            <section className = "error-500_content">
                <div className = "error-500_content--errors">
                    <h2>Error</h2>
                    <h3>opps! algo salió mal</h3>
                </div>
                <button onClick = {() => window.history.back()}>Reintentar</button>
            </section>
            <section className = "error-500_background">

            </section>
        </section>
    )
}

export default ServerErrorContainer;