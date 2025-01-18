"use client";

import { Building2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GroupsOutlined } from "@mui/icons-material";
import {
  BeneficiaryGroup,
  CharacterCounter,
  ConfirmButton,
  ErrorMessage,
  Field,
  Fieldset,
  Form,
  Input,
  Label,
  Legend,
  OnlyWhatsappLabel,
  Textarea,
  TextareaWrapper,
} from "./styles";
import { useEffect } from "react";
import debounce from "lodash/debounce";
import { toast } from "react-toastify";
import ThematicAreas from "../ThematicAreas/ThematicAreas";

interface IFormData {
  project: {
    thematicAreas: string[];
    title: string;
    description: string;
    beneficiary: {
      name: string;
      group: string;
      contact: {
        email: string;
        phone: string;
        onlyWhatsapp: boolean;
      };
    };
  };
}

export default function SubmissionForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    reset,
  } = useForm<IFormData>({
    mode: "all",
    reValidateMode: "onBlur",
    defaultValues: {
      project: {
        thematicAreas: [],
        title: "",
        description: "",
        beneficiary: {
          name: "",
          group: "",
          contact: {
            email: "",
            phone: "",
            onlyWhatsapp: false,
          },
        },
      },
    },
  });

  const formValues = watch();

  useEffect(() => {
    const debouncedSave = debounce((data: IFormData) => {
      localStorage.setItem("formDraft", JSON.stringify(data));
    }, 1000);

    if (isDirty) {
      debouncedSave(formValues);
    }

    return () => {
      debouncedSave.cancel();
    };
  }, [formValues, isDirty]);

  useEffect(() => {
    const saved = localStorage.getItem("formDraft");
    if (saved) {
      setValue("project", JSON.parse(saved));
    }
  }, [setValue]);

  const handleSubmission: SubmitHandler<IFormData> = async (data) => {
    try {
      const toastId = toast.loading("Enviando projeto...");
      const payload = {
        title: data.project.title,
        description: data.project.description,
        thematicAreas: data.project.thematicAreas,
        beneficiary: {
          name: data.project.beneficiary.name,
          group: data.project.beneficiary.group,
          contact: {
            email: data.project.beneficiary.contact.email,
            phone: data.project.beneficiary.contact.phone,
            onlyWhatsapp:
              data.project.beneficiary.contact.onlyWhatsapp || "false", // Por algum motivo não posso passar false sem ser string
          },
        },
      };

      const response = await fetch(
        `${process.env.IFCONECTA_API_URL}/projects/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (result.success) {
        toast.update(toastId, {
          render: "Projeto enviado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Erro ao enviar projeto. Tente novamente.");
    }
  };

  function formatPhoneNumber(value: string) {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return value;
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmission)}>
      <Fieldset>
        <Legend>Informações do projeto: </Legend>
        <Field>
          <Label>Área Temática:</Label>
          <ThematicAreas
            {...register("project.thematicAreas", {
              required: "Selecione pelo menos uma área",
              validate: (value) =>
                value.length > 0 || "Selecione pelo menos uma área temática",
            })}
          />
          {errors.project?.thematicAreas && (
            <ErrorMessage>{errors.project.thematicAreas.message}</ErrorMessage>
          )}
        </Field>
        <Field>
          <Label>Grupo Beneficiado:</Label>
          <BeneficiaryGroup>
            <label>
              <input
                type="radio"
                {...register("project.beneficiary.group", {
                  required: "Selecione um tipo",
                })}
                value="empresa"
              />
              <Building2 /> Empresa
            </label>
            <label>
              <input
                type="radio"
                {...register("project.beneficiary.group")}
                value="comunidade"
              />
              <GroupsOutlined /> Comunidade
            </label>
          </BeneficiaryGroup>
          {errors.project?.beneficiary?.group && (
            <ErrorMessage>
              {errors.project.beneficiary.group.message}
            </ErrorMessage>
          )}
        </Field>
        <Field>
          <Label htmlFor="project.title">Nome do Projeto:</Label>
          <Input
            {...register("project.title", {
              required: "Nome do projeto é obrigatório",
            })}
            placeholder="Digite um nome para o projeto"
          />
          {errors.project?.title && (
            <ErrorMessage>{errors.project.title.message}</ErrorMessage>
          )}
        </Field>
        <Field>
          <Label htmlFor="project.description">Descrição do Projeto:</Label>
          <TextareaWrapper>
            <Textarea
              {...register("project.description", {
                required: "Descrição é obrigatória",
                minLength: {
                  value: 100,
                  message: "Mínimo de 100 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "Máximo de 500 caracteres",
                },
              })}
              placeholder="Descreva o projeto"
            />
            <CharacterCounter
              $isOverLimit={(watch("project.description")?.length || 0) > 500}
            >
              {watch("project.description")?.length || 0}/500
            </CharacterCounter>
          </TextareaWrapper>
          {errors.project?.description && (
            <ErrorMessage>{errors.project.description.message}</ErrorMessage>
          )}
        </Field>
      </Fieldset>
      <Fieldset>
        <Legend>Informações do Beneficiário: </Legend>
        <Field>
          <Label htmlFor="project.beneficiary.name">
            Nome do Beneficiário:
          </Label>
          <Input
            {...register("project.beneficiary.name", {
              required: "Nome é obrigatório",
            })}
            placeholder="Digite seu nome"
          />
          {errors.project?.beneficiary?.name && (
            <ErrorMessage>
              {errors.project.beneficiary.name.message}
            </ErrorMessage>
          )}
        </Field>
        <Field>
          <Label htmlFor="project.beneficiary.contact.email">E-mail:</Label>
          <Input
            type="email"
            {...register("project.beneficiary.contact.email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido",
              },
            })}
            placeholder="Digite seu e-mail de contato"
          />
          {errors.project?.beneficiary?.contact?.email && (
            <ErrorMessage>
              {errors.project.beneficiary.contact.email.message}
            </ErrorMessage>
          )}
        </Field>

        <Field>
          <Label htmlFor="project.beneficiary.contact.phone">Telefone:</Label>
          <Input
            type="tel"
            {...register("project.beneficiary.contact.phone", {
              required: "Telefone é obrigatório",
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: "Telefone inválido",
              },
            })}
            onChange={(e) => {
              const formatted = formatPhoneNumber(e.target.value);
              setValue("project.beneficiary.contact.phone", formatted);
            }}
            placeholder="Ex. (99) 99999-9999"
          />
          {errors.project?.beneficiary?.contact?.phone && (
            <ErrorMessage>
              {errors.project.beneficiary.contact.phone.message}
            </ErrorMessage>
          )}
          <OnlyWhatsappLabel>
            <input
              type="checkbox"
              {...register("project.beneficiary.contact.onlyWhatsapp")}
            />
            Apenas Whatsapp
          </OnlyWhatsappLabel>
        </Field>
      </Fieldset>
      <ConfirmButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Confirmar envio"}
      </ConfirmButton>
    </Form>
  );
}
