Public Class WebForm1
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub btn_generate_Click(sender As Object, e As EventArgs) Handles btn_generate.Click

        'Dim desirable_content_length = txt_desirable_content_length.Text.Trim 
        Dim desirable_content_length = 1000

        Call click_event_ececute(desirable_content_length)

    End Sub

    Private Sub btn_decrease_Click(sender As Object, e As EventArgs) Handles btn_decrease.Click

        Dim current_desirable_content_length = CInt(txt_desirable_content_length.Text)

        Dim new_current_desirable_content_length As Integer = CInt(Math.Round(current_desirable_content_length * 0.7))

        txt_desirable_content_length.Text = new_current_desirable_content_length.ToString

        click_event_ececute(CInt(txt_desirable_content_length.Text))

    End Sub

    Private Sub btn_increase_Click(sender As Object, e As EventArgs) Handles btn_increase.Click

        Dim current_desirable_content_length = CInt(txt_desirable_content_length.Text)

        Dim new_current_desirable_content_length As Integer = CInt(Math.Round(current_desirable_content_length * 1.5))

        txt_desirable_content_length.Text = new_current_desirable_content_length.ToString

        click_event_ececute(CInt(txt_desirable_content_length.Text))

    End Sub

    Private Sub click_event_ececute(desirable_content_length As Integer)

        Dim wcf As New WcfService1.Service1

        Dim keywords = txt_keywords.Text.Trim
        Dim RANK = 0
        'Dim desirable_content_length = txt_desirable_content_length.Text.Trim 

        Dim result = wcf.GetData(keywords, 0, desirable_content_length)

        result = Regex.Replace(result, "rank_100_start", "<span style=""color: red;"">")
        result = Regex.Replace(result, "rank_100_end", "</span>")

        result = Regex.Replace(result, "\n", "<br/>")

        lbl_result_content.Text = result

        txt_final_length.Text = Regex.Replace(result, "<[^<>]+>", "").Length

    End Sub


End Class