'use client';

import { User, Lock, Mail, Smartphone } from "lucide-react";
import { useState } from "react";


export default function FormRegister() {

    const [formData, setFormData] = useState({
        username: "",
        telefone: "",
        email: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);

        if (!formData.username || !formData.email || !formData.password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

    }

    return (
        <>
            {/* Card do formulário */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 w-full max-w-md mx-4 z-10">
                <div className="text-center mb-2">
                    <h2 className="text-3xl font-semibold text-white">Cadastre-se</h2>
                </div>

                {/* Usuário */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm font-medium text-gray-200 ml-1">
                        Usuário
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Digite seu usuário"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/20 border border-gray-400/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="telefone" className="text-sm font-medium text-gray-200 ml-1">
                        Telefone
                    </label>
                    <div className="relative">
                        <Smartphone className="absolute left-3 top-4 text-gray-400" size={18} />
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="Digite seu telefone"
                            maxLength={15}
                            className="w-full pl-10 pr-4 py-3 bg-white/20 border border-gray-400/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200 ml-1">
                        Email
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-4 text-gray-400" size={18} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite seu email"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/20 border border-gray-400/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Senha */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-200 ml-1">
                        Senha
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-4 text-gray-400" size={18} />
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite sua senha"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/20 border border-gray-400/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>


                {/* Botão de login */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#70d9ce] to-[#2E4347] text-white py-3 px-4 rounded-lg font-semibold hover:scale-[1.03] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:ring-offset-2 focus:ring-offset-[#2E4347]"
                >
                    Cadastrar
                </button>

                {/* Cadastro */}
                <div className="text-center mt-4">
                    <p className="text-gray-300">
                        Já possui uma conta?{" "}
                        <a href="/login" className="text-[#70d9ce] hover:text-white font-medium transition-colors">
                            Entrar
                        </a>
                    </p>
                </div>
            </form >
        </>
    );
}