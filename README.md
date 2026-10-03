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

## Superfície publicada

| Arquivo | Função |
|---|---|
| `public/index.html` | Página única (hero → problema → solução → módulos → fluxo 0–10 → LGPD → evidências → piloto → FAQ → CTA) |
| `public/styles.css` · `public/main.js` | Estilo e interações (menu móvel, acordeão, reveal) — sem dependências |
| `public/CNAME` | Domínio próprio para o TLS do GitHub Pages |
| `public/robots.txt` · `public/sitemap.xml` | Indexação explícita em `advocaciaproativa.com.br` |
| `public/assets/favicon.svg` | Ícone |
| `public/assets/og-card.jpg` | Card de compartilhamento 1200×630 (Open Graph / Twitter) |
| `public/assets/logo-512.png` | Logo quadrado para o campo `logo` do JSON-LD |

CTA principal: `mailto:contato@advocaciaproativa.com.br`, com assunto e corpo pré-preenchidos (inclui aviso de não enviar dados sensíveis de assistidos por e-mail).

## Preview social (Open Graph)

`og-card.jpg` é gerado a partir de HTML renderizado em Chromium headless a 1200×630 — fonte em `scratchpad/og-card.html` do histórico da sessão; para regerar, renderize o HTML no mesmo viewport e exporte JPEG q92.

Dois cuidados ao trocar a arte:

1. **As plataformas fazem cache do Open Graph.** Trocar o conteúdo do arquivo mantendo o nome não atualiza previews já vistos. Publique com nome novo (`og-card-2.jpg`) ou force o rescrape em [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
2. **Peso.** O WhatsApp deixa de renderizar preview em arquivos grandes; manter abaixo de ~300 KB (o atual tem ~68 KB).

As URLs em `og:image` precisam ser **absolutas** — caminho relativo é ignorado em silêncio por Facebook e LinkedIn.

## Cutover DNS (Registro.br)

```
@   CNAME   martbarreto-sudo.github.io.    (se Registro.br suportar ALIAS/ANAME no apex)
www CNAME   martbarreto-sudo.github.io.
```

Fallback para Registro.br sem suporte a ALIAS no apex: usar os 4 IPs A do GitHub Pages (185.199.108.153 / 109.153 / 110.153 / 111.153).

O arquivo `public/CNAME` instrui o GitHub Pages a emitir certificado TLS para `advocaciaproativa.com.br`.

## Identidade institucional

Esta superfície pública usa a paleta **teal institucional** — TEAL `#0E4F4A` (primária) · TEAL claro `#6FC2B8` (acento) · ARGILA `#B45B27` (reservada ao aviso LGPD) sobre neutros quentes `#F6F4EF`/`#FCFBF8`. Tipografia: Zodiak (display) + General Sans (texto), via Fontshare.

> A paleta NAVY `#0B1E3F` · GOLD `#B08D2E` é a da **banca institucional** (`supreme-drafter` / war.ribeiroetigre.org) e não se aplica aqui: o NEXUM Público é deliberadamente distinto, com leitura de serviço público em vez de advocacia privada.

Marca d'água `NEXUM` reservada para peças jurídicas geradas pelo Engine TIER 0 (skill `nexum-tier-0` v1.5.0).

## Licença e governança

Conteúdo institucional · LGPD-aware · trilha de auditoria via histórico Git. Issues e PRs sob revisão dos sócios de R&T.

---

_Ribeiro & Tigre Advocacia Criminal · Recife/PE · OAB/PE 27.482 + 27.543_
