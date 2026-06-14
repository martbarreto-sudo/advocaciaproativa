# NEXUM Público — Advocacia Proativa

> Vitrine institucional do programa **NEXUM Público — Infraestrutura de IA para Defensorias Públicas, assistência jurídica gratuita e acesso à justiça**, parte do ecossistema **NEXUM BY TIGRE** desenvolvido por **Ribeiro & Tigre Advocacia Criminal**.

**Live:** [advocaciaproativa.com.br](https://advocaciaproativa.com.br) · **Mirror:** [martbarreto-sudo.github.io/advocaciaproativa](https://martbarreto-sudo.github.io/advocaciaproativa/)

## Topologia NEXUM

| Superfície | Repositório | Domínio canônico |
|---|---|---|
| Banca institucional | [supreme-drafter](https://github.com/martbarreto-sudo/supreme-drafter) | war.ribeiroetigre.org |
| **NEXUM Público (aqui)** | **advocaciaproativa** | **advocaciaproativa.com.br** |
| Núcleo operacional (privado) | warroom-tigre | — |

## Stack

Site 100% estático — HTML/CSS/JS puro, sem build, sem framework, servido via GitHub Pages com HTTPS gratuito do GitHub.

## Pipeline

`.github/workflows/pages.yml` faz:
1. **Validate HTML & CSS** com `html5validator` (vnu/W3C) em todo push e pull request.
2. **Publish public/ to gh-pages** quando o push é para `master` (não para PRs).

## Cutover DNS (Registro.br)

```
@   CNAME   martbarreto-sudo.github.io.    (se Registro.br suportar ALIAS/ANAME no apex)
www CNAME   martbarreto-sudo.github.io.
```

Fallback para Registro.br sem suporte a ALIAS no apex: usar os 4 IPs A do GitHub Pages (185.199.108.153 / 109.153 / 110.153 / 111.153).

O arquivo `public/CNAME` instrui o GitHub Pages a emitir certificado TLS para `advocaciaproativa.com.br`.

## Identidade institucional

NAVY `#0B1E3F` · GOLD `#B08D2E` · padrão visual unificado com Ribeiro & Tigre. Marca d'água `NEXUM` reservada para peças jurídicas geradas pelo Engine TIER 0 (skill `nexum-tier-0` v1.5.0).

## Licença e governança

Conteúdo institucional · LGPD-aware · trilha de auditoria via histórico Git. Issues e PRs sob revisão dos sócios de R&T.

---

_Ribeiro & Tigre Advocacia Criminal · Recife/PE · OAB/PE 27.482 + 27.543_
