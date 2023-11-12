<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="default_backup.aspx.vb" Inherits="WebApplication2.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
</head>
<body style="line-height:160%;">
    <form id="form1" runat="server" style="margin-left:auto;margin-right:auto;" >

        <p>
            <asp:Panel ID="Panel1" runat="server" Font-Size="XX-Large" HorizontalAlign="Center">Kengine Version 0.6</asp:Panel>
        </p>
        <p>
            <asp:Table ID="Table1" runat="server" Width="100%" CellPadding="10" CellSpacing="10">

                <asp:TableRow runat="server">

                    <asp:TableCell runat="server" HorizontalAlign="Left" Width="20%" Wrap="True">

                        <asp:Button ID="btn_generate" runat="server" Text="답변생성 - 세법 관련 테스트 중" Height="40px" Width="280px" Font-Size="Larger" />

                    </asp:TableCell>

                    <asp:TableCell runat="server" HorizontalAlign="Right" Width="80%">

                        <span>출력글자수</span>&nbsp;
                        <asp:TextBox ID="txt_final_length" runat="server" Text ="" Enabled="false"  style="text-align: right" Width="60px"></asp:TextBox>

                    </asp:TableCell>
                    
                </asp:TableRow>
                
                <asp:TableRow runat="server">

                    <asp:TableCell runat="server" HorizontalAlign="Left" Width="20%">
                        

                    </asp:TableCell>

                    <asp:TableCell runat="server" HorizontalAlign="Right" Width="80%">

                        <asp:Button ID="btn_decrease" runat="server" Text="▼" />&nbsp;
                        <span>출력량조절</span>&nbsp;
                        <asp:Button ID="btn_increase" runat="server" Text="▲" />&nbsp;
                        <asp:TextBox ID="txt_desirable_content_length" runat="server" Text ="1000" style="text-align: right" Width="60px" Wrap="True" Visible="False"></asp:TextBox>

                    </asp:TableCell>
                    
                </asp:TableRow>

            </asp:Table>
        </p>
        <p>
            <asp:Table ID="Table2" runat="server" Width="100%" CellPadding="10" CellSpacing="10">

                <asp:TableRow runat="server" Width="100%">

                    <asp:TableCell runat="server" HorizontalAlign="Justify" Width="100%" Height="100%">

                        <asp:TextBox ID="txt_keywords" runat="server" Width="100%" text="채권이나 증권의 환매조건부 매매차익의 귀속시기는 언제인가요?"></asp:TextBox>

                    </asp:TableCell>

                </asp:TableRow>

                <asp:TableRow runat="server" Width="100%">

                    <asp:TableCell runat="server" HorizontalAlign="Justify" Width="100%" Height="100%">

                    </asp:TableCell>

                </asp:TableRow>

                <asp:TableRow runat="server" Width="100%">

                    <asp:TableCell runat="server" HorizontalAlign="Justify" Width="100%" Height="100%">

                        <asp:Label ID="lbl_result_content" runat="server" Text="" Width="100%"></asp:Label>

                    </asp:TableCell>

                </asp:TableRow>

            </asp:Table>
        </p>

    </form>
</body>
</html>
