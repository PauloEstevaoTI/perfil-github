function NotFoundData() {
  return (
    <section className="flex justify-center items-center ">
      <div className="bg-white h-[88px] w-[710px] justify-center items-center flex rounded-md">
        <p className="text-center text-[#FF0000] text-xl">
          Nenhum perfil foi encontrado com esse nome de usuario
          <br />
          Tente novamente.
        </p>
      </div>
    </section>
  );
}

export default NotFoundData;
