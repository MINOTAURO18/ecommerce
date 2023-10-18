import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} px-8% py-6 flex justify-between items-center flex-wrap gap-10 cursor-pointer`}>
      <div className='flex flex-col gap-1'>
        <h4 className='font-semibold'>somos TuDestino</h4>
        <span>nuestro telefono</span>
        <span>sobre viajes</span>
      </div>

      <div className='flex flex-col gap-1'>
        <h4 className='font-semibold'>cuida tus compras</h4>
        <span>terminos y condiciones</span>
        <span>politicas de privacidad</span>
        <span>codiciones de campaña</span>
        <span>condiciones de pago</span>
      </div>

      <div className='flex flex-col gap-1'>
        <h4 className='font-semibold'>atencion al cliente</h4>
        <span>nuestras sucursales</span>
        <span>suscripcion ofertas</span>
        <span>quejas</span>
      </div>

      <div>
        <a className='font-semibold' href="#">Made By JAMY</a>
      </div>
    </footer>
  );
};

export default Footer;
