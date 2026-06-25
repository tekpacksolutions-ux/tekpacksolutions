import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, industry, materialType, productionVolume, additionalRequirements } = body

    // Validation Guard
    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required contact fields' }, { status: 400 })
    }

    // Trigger email via Resend API
    const emailResponse = await resend.emails.send({
      from: 'TEKPACK Systems <onboarding@resend.dev>', // Update to your verified domain in production
      to: 'tekpacksolutions@gmail.com', // Your admin destination email address
      subject: `🚨 New Machinery RFP Quote Request: ${company}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eee;">
          <h2 style="color: #0891b2; text-transform: uppercase;">New Packaging Automation RFP Lead</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          
          <h3 style="margin-top: 20px;">Client Profile Details</h3>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Business Email:</strong> ${email}</p>
          <p><strong>Company Name:</strong> ${company}</p>
          
          <h3 style="margin-top: 20px;">Technical Engineering Profile</h3>
          <p><strong>Target Industry:</strong> ${industry}</p>
          <p><strong>Material Type / Substrate:</strong> ${materialType}</p>
          <p><strong>Target Production Output Volume:</strong> ${productionVolume}</p>
          
          <h3 style="margin-top: 20px;">Additional Design Specs</h3>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0891b2; font-style: italic;">
            ${additionalRequirements || 'No extra criteria requested.'}
          </p>
        </div>
      `,
    })

    if (emailResponse.error) {
      return NextResponse.json({ error: emailResponse.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'RFP application successfully routed' }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message ?? 'Internal Server Error' }, { status: 500 })
  }
}
