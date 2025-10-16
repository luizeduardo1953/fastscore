import Image from "next/image";
import FormRegister from "@/app/components/form-sign-up";
import FooterLogin from "@/app/components/footer-login";

export default function signUp() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-[#1a2c30] via-[#2E4347] to-[#3d5c63] flex flex-col items-center justify-center p-6 relative overflow-hidden">

                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

                {/* Logo e título */}
                <div className="flex flex-col items-center justify-center mb-8 z-10">
                    <Image
                        src="/bola.png"
                        alt="Bola de vôlei"
                        width={140}
                        height={140}
                        quality={100}
                        className="drop-shadow-2xl mb-4"
                    />
                    <h1 className="font-extrabold text-white text-5xl tracking-tight drop-shadow-lg">
                        Fast Score
                    </h1>

                </div>
                <FormRegister />
                <FooterLogin />

            </div>
        </>
    )
}