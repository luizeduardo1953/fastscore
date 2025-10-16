'use client'

import { User, Lock } from "lucide-react";
import React from "react";
import { useState } from "react";

export default function FormLogin() {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Lógica de autenticação aqui
        console.log("Formulário de login enviado");
    }

    return (
        <>
            {/* Card do formulário */}
            <form className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 w-full max-w-md mx-4 z-10">
                <div className="text-center mb-2">
                    <h2 className="text-3xl font-semibold text-white">Login</h2>
                    <p className="text-gray-300 mt-2">Acesse sua conta para continuar</p>
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
                            autoComplete="off"
                            placeholder="Digite seu usuário"
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
                            placeholder="Digite sua senha"
                            className="w-full pl-10 pr-4 py-3 bg-white/20 border border-gray-400/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Lembrar + Esqueceu */}
                <div className="flex items-center justify-between text-sm px-1">
                    <label className="flex items-center gap-2 text-gray-200">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300 bg-transparent text-[#70d9ce] focus:ring-[#70d9ce]"
                        />
                        Lembrar-me
                    </label>
                    <a href="#" className="text-[#70d9ce] hover:text-white font-medium transition-colors">
                        Esqueceu a senha?
                    </a>
                </div>

                {/* Botão de login */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#70d9ce] to-[#2E4347] text-white py-3 px-4 rounded-lg font-semibold hover:scale-[1.03] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#70d9ce] focus:ring-offset-2 focus:ring-offset-[#2E4347]"
                >
                    Entrar
                </button>

                {/* Cadastro */}
                <div className="text-center mt-4">
                    <p className="text-gray-300">
                        Não tem uma conta?{" "}
                        <a href="/sign-up" className="text-[#70d9ce] hover:text-white font-medium transition-colors">
                            Cadastre-se
                        </a>
                    </p>
                </div>
            </form>
        </>

    );
}
