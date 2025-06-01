"use client";
import Image from "next/image";
import background from "@/public/assets/img/bg-login.png";
import Logo from "@/components/svg/Logo";
import { useState, useEffect } from "react";
import API from "@/utils/API";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/UseAuth";
const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useRouter();
  const auth = useAuth();

  const handleLogin = () => {
    setIsLoading(true);
    API.post("/auth/login", {
      userName,
      password,
    })
      .then((res) => {
        setIsLoading(false);
        const data: any = {
          user: {
            id: res.data.data._id,
            fullName: res.data.data.fullName,
            phone: res.data.data.phone,
            email: res.data.data.email,
          },
          token: `Bearer ${res.data.data.token}`,
        };
        auth.login(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (auth.auth.isAuthenticated) {
      navigation.replace("/");
    }
    console.log(auth.auth.isAuthenticated);
    console.log(auth.auth);
  }, [auth.auth.isAuthenticated, navigation]);

  if (auth.auth.isAuthenticated) {
    navigation.replace("/");
    return null;
  }

  return (
    <div className=" w-full h-screen p-7 flex justify-between items-center">
      <div className=" h-full w-[35%] rounded-[25px] bg-gradient-to-b from-[#ECF9CB]/40 to-[#8B9378]/40 border-[1px] border-[#ECF9CB] p-5 flex flex-col justify-center items-center gap-5">
        <div className="mr-3">
          <Logo />
        </div>
        <h1 className="font-bold text-3xl tracking-[10px] text-[#EEF6EA]">
          WELCOME
        </h1>
        <p className=" w-[300px] text-center text-[#ECF9CB] text-[17px]">
          Melindungi akar kehidupan Indonesia, merawat napas bumi untuk anak
          cucu kita.
        </p>

        <input
          type="text"
          className="outline-none text-[#EEF6EA] h-[60px] w-[80%] rounded-[10px] border-[#ECF9CB] border-[1px] px-5 text-xl bg-[#ECF9CB]/20 placeholder:text-[#ECF9CB]/50 mt-10"
          value={userName}
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          className="outline-none text-[#EEF6EA] h-[60px] w-[80%] rounded-[10px] border-[#ECF9CB] border-[1px] px-5 text-xl bg-[#ECF9CB]/20 placeholder:text-[#ECF9CB]/50 mt-5"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => handleLogin()}
          className=" py-3 w-[250px] flex items-center justify-center rounded-full bg-[#ECF9CB]/20 font-bold text-xl border-[#ECF9CB] border-[1px] mt-5 text-[#EEF6EA]"
        >
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-[#ECF9CB]/20 animate-spin fill-[#ECF9CB]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <h1>Masuk</h1>
          )}
        </button>
      </div>
      <div className="h-full w-[63%] bg-transparent rounded-[25px] overflow-hidden relative">
        <Image
          src={background}
          alt="background"
          priority
          fill
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
