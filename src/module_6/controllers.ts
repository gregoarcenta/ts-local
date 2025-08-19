import { Body, Controller, Get, Post, Validate } from "./decorators";

// DTOs tipados
export class CreateUserDto {
  constructor(
    public name: string,
    public email: string
  ) {}
}

@Controller("/users")
export class UserController {
  private users: { id: number; name: string; email: string }[] = [];
  private idSeq = 1;

  // 1) Ruta simple GET
  @Get("/")
  list() {
    return this.users;
  }

  // 2) Ruta POST con @Body() + @Validate()
  @Post("/")
  @Validate<CreateUserDto>((payload) => {
    const errors: string[] = [];
    const p = payload as Partial<CreateUserDto>;
    if (!p?.name || p.name.trim().length < 3)
      errors.push("name: mínimo 3 caracteres");
    if (!p?.email || !/^\S+@\S+\.\S+$/.test(p.email))
      errors.push("email: formato inválido");
    return errors;
  })
  create(@Body() body: CreateUserDto) {
    const user = { id: this.idSeq++, name: body.name, email: body.email };
    this.users.push(user);
    return { ok: true, user };
  }
}
