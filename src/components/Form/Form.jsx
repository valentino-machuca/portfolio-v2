import React, { useState } from 'react';
import s from './Form.module.scss';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const Form = () => {

    const night = useSelector(state => state.night);

    const [form, setForm] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await toast.promise(
            emailjs.sendForm('service_g04x5wo', 'template_3g79in7', e.target, 'lN-DVVhe6Qrjydx1x'),
            {
              pending: '⌛ Enviando...',
              success: '📨 Enviado correctamente :)',
              error: '❌ Algo salió mal :/'
            }
        );

        setForm({
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
        });
      }

  return (
    <div className={`${s.container} ${night ? '' : s.day}`}>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{width: 400, height: 120, fontSize: 16}}
        />

        <form className={s.form} onSubmit={handleSubmit}>
            <motion.h4
                initial={{y:-100, opacity:0}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.3, delay: 0.1}}
            >Contacto</motion.h4>
            <motion.div className={s.name}
                initial={{x:-100, opacity:0}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 0.3, delay: 0.3}}
            >
                <div className={s.input}>
                    <input type="text" placeholder='Nombre' name='from_name' required onChange={handleChange} value={form.from_name}/>
                    <div className={s.line}></div>
                </div>
                <div className={s.input}>
                    <input type="email" placeholder='Email' name='from_email' required onChange={handleChange} value={form.from_email}/>
                    <div className={s.line}></div>
                </div>
            </motion.div>

            <motion.div className={s.subject}
                initial={{x:100, opacity:0}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 0.3, delay: 0.5}}
            >
                <div className={s.input}>
                    <input type="text" placeholder='Asunto' name='subject' required onChange={handleChange} value={form.subject}/>
                    <div className={s.line}></div>
                </div>
            </motion.div>

            <motion.div className={s.message}
                initial={{y:100, opacity:0}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.3, delay: 0.7}}
            >
                <div className={s.textarea}>
                    <textarea type="text" placeholder='Mensaje' name='message' required onChange={handleChange} value={form.message}/>
                    <div className={s.line}></div>
                </div>
            </motion.div>

            <motion.div className={s.sendbutton}
                initial={{y:100, opacity:0}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.5}}
            >
                <input type="submit" value='Enviar' className={s.btn}/>
            </motion.div>

        </form>
    </div>
  )
}

export default Form